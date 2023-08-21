import { register } from '../../register.js';

register({
  tech: 'aws.sns',
  name: 'SNS',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-sns' },
    { type: 'rust', name: 'aws-sdk-sns' },
    { type: 'ruby', name: 'aws-sdk-sns' },
  ],
});
