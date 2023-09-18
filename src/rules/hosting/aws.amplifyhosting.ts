import { register } from '../../register.js';

register({
  tech: 'aws.amplifyhosting',
  name: 'AWS Amplify Hosting',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: 'aws-amplify' },
    { type: 'npm', name: /^@aws-amplify\//, example: '@aws-amplify/ui-react' },
    {
      type: 'terraform.resource',
      name: /^aws_amplify_/,
      example: 'aws_amplify_app',
    },
  ],
});
