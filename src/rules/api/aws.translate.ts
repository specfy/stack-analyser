import { register } from '../../register.js';

register({
  tech: 'aws.translate',
  name: 'AWS Translate',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-translate' },
    { type: 'npm', name: '@aws-cdk/aws-translate' },
    { type: 'rust', name: 'aws-sdk-translate' },
    { type: 'ruby', name: 'aws-sdk-translate' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/translate',
    },
  ],
});
