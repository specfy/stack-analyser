import { register } from '../../register.js';

register({
  tech: 'aws.lambda',
  name: 'Lambda',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-lambda' },
    {
      type: 'docker',
      name: /^amazon\/aws-lambda/,
      example: 'amazon/aws-lambda-python',
    },
    { type: 'rust', name: 'aws-sdk-lambda' },
    { type: 'rust', name: 'lambda_runtime' },
    { type: 'ruby', name: 'aws-sdk-lambda' },
  ],
});
