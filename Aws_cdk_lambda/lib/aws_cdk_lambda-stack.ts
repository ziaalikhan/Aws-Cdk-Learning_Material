import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";
// import * as s3 from "@aws-cdk/aws-s3";

export class AwsCdkLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // new s3.Bucket(this, "MyFirstBucket", {
    //   versioned: true,
    // });

    // The code that defines your stack goes here
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    // Api GateWay get the Lambda function into Client Side //

    const api = new apigateway.LambdaRestApi(this, "myendpoint", {
      handler: hello,
      proxy: false,
    });

    // // Api GateWay get the Lambda function into Client Side //

    // const api1 = new apigateway.LambdaRestApi(this, "mylambdaendpoint_One", {
    //   handler: hello,
    //   proxy: false,
    // });

    const items = api.root.addResource("user"); // user is the endpoint
    items.addMethod("GET"); // GET / items

    // const items_1 = api1.root.addResource("bus");
    // items_1.addMethod("GET"); // GET / items
  }
}
