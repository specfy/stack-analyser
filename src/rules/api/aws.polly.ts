import { register } from '../../register.js';

register({
  tech: 'aws.polly',
  name: 'AWS Polly',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-polly' },
    { type: 'npm', name: '@aws-cdk/aws-polly' },
    { type: 'rust', name: 'aws-sdk-polly' },
    { type: 'ruby', name: 'aws-sdk-polly' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/polly',
    },
  ],
});
