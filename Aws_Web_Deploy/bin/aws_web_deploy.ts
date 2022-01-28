#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsWebDeployStack } from '../lib/aws_web_deploy-stack';

const app = new cdk.App();
new AwsWebDeployStack(app, 'AwsWebDeployStack');