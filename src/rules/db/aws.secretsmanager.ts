import { register } from '../../register.js';

register({
  tech: 'aws.secretsmanager',
  name: 'AWS Secrets Manager',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-secretsmanager' },
    { type: 'npm', name: '@aws-sdk/client-secrets-manager' },
    { type: 'rust', name: 'aws-sdk-secretsmanager' },
    { type: 'ruby', name: 'aws-sdk-secretsmanager' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/secretsmanager',
    },
    {
      type: 'terraform.resource',
      name: /^aws_secretsmanager_/,
      example: 'aws_secretsmanager_secret',
    },
  ],
});
