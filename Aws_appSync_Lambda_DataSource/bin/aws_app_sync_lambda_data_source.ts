#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsAppSyncLambdaDataSourceStack } from '../lib/aws_app_sync_lambda_data_source-stack';

const app = new cdk.App();
new AwsAppSyncLambdaDataSourceStack(app, 'AwsAppSyncLambdaDataSourceStack');