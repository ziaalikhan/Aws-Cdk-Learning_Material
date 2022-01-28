import * as cdk from "@aws-cdk/core";
import * as appsync from "@aws-cdk/aws-appsync";
import * as lambda from "@aws-cdk/aws-lambda";

export class AwsAppSyncLambdaDataSourceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // APPSYNC API gives you a graphql api with api key
    const api = new appsync.GraphqlApi(this, "GRAPHQL_API", {
      name: "bootcamp_AppSync",
      schema: appsync.Schema.fromAsset("graphql/schema.gql"), ///Path specified for lambda
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY, ///Defining Authorization Type
        },
      },
    });

    // Print Graphql Api Url on console after deploy
    new cdk.CfnOutput(this, "APIGraphQlURL", {
      value: api.graphqlUrl,
    });

    // // Print API Key on console after deploy
    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || "",
    });

    // // Lambda Fucntion
    const lambda_function = new lambda.Function(this, "LambdaFunction", {
      runtime: lambda.Runtime.NODEJS_14_X, // nodejs runtime environment
      code: lambda.Code.fromAsset("lambda"), //  path for lambda function directory
      handler: "index.handler", // specfic fucntion in specific file
      timeout: cdk.Duration.seconds(10), // Time for function to break. limit upto 15 mins
    });

    // // Set lambda as a datasource
    const lambda_data_source = api.addLambdaDataSource(
      "lamdaDataSource",
      lambda_function
    );

    // // Describing resolver for datasource
    lambda_data_source.createResolver({
      typeName: "Query",
      fieldName: "hello",
    });

    // // Describing resolver for datasource
    lambda_data_source.createResolver({
      typeName: "Query",
      fieldName: "name",
    });
  }
}
