import { register } from '../../register.js';

register({
  tech: 'aws.comprehend',
  name: 'AWS Comprehend',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-comprehend' },
    { type: 'npm', name: '@aws-sdk/client-comprehendmedical' },
  ],
});
