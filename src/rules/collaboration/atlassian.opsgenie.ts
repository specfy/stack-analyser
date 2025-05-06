import { register } from '../../register.js';

register({
  tech: 'atlassian.opsgenie',
  name: 'Atlassian OpsGenie',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: 'opsgenie-sdk' },
    { type: 'npm', name: '@pulumi/opsgenie' },
  ],
});
