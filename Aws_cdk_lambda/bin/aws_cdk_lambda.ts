#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkLambdaStack } from '../lib/aws_cdk_lambda-stack';

const app = new cdk.App();
new AwsCdkLambdaStack(app, 'AwsCdkLambdaStack');