#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {LifeManagementServiceStack} from '../lib/life_management_service-stack';

import {WidgetService} from "../lib/widget_service";
import {WidgetServiceStack} from "../lib/widget_service_stack";

const app = new cdk.App();
const envUSA = {
    account: "005217244171", //process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-west-2"}//process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION };
new LifeManagementServiceStack(app, 'LifeManagementServiceStack', {env: envUSA} );
new WidgetServiceStack(app,"WidgetStack", {env: envUSA});

