#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsLambdaStack } from '../lib/aws_lambda-stack';

const app = new cdk.App();
new AwsLambdaStack(app, 'AwsLambdaStack');