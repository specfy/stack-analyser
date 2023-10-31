import { register } from '../../register.js';

register({
  tech: 'atlassian.opsgenie',
  name: 'Atlassian OpsGenie',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'opsgenie-sdk' },
    { type: 'npm', name: '@pulumi/opsgenie' },
  ],
});
