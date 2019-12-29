import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import LifeManagementService = require('../lib/life_management_service-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LifeManagementService.LifeManagementServiceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});