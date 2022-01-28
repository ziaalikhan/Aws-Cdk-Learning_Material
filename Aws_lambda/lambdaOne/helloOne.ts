import { APIGatewayProxyEvent , APIGatewayProxyResult , Context } from 'aws-lambda';

export async function handlerOne(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  console.log("request:", JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `This is My Second Lambda To Deploy and Make it the Endpoint Using Api GateWay to access it in Client Side ${event.path}.`
  };
}