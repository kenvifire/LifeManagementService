import cdk = require("@aws-cdk/core");

import widget_service = require('../lib/widget_service');

export class WidgetServiceStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new widget_service.WidgetService(this, "WidgetService");

    }
}
