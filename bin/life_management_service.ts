#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { LifeManagementServiceStack } from '../lib/life_management_service-stack';

const app = new cdk.App();
new LifeManagementServiceStack(app, 'LifeManagementServiceStack');
