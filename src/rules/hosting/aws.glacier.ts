import { register } from '../../register.js';

register({
  tech: 'aws.glacier',
  name: 'Glacier',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-glacier' },
    { type: 'rust', name: 'aws-sdk-glacier' },
    { type: 'ruby', name: 'aws-sdk-glacier' },
  ],
});
