import { register } from '../../register.js';

register({
  tech: 'aws.lambda',
  name: 'AWS Lambda',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: 'is-lambda' },
    { type: 'npm', name: '@aws-cdk/aws-lambda' },
    { type: 'npm', name: '@types/aws-lambda' },
    { type: 'npm', name: '@aws-sdk/client-lambda' },
    {
      type: 'docker',
      name: /^amazon\/aws-lambda/,
      example: 'amazon/aws-lambda-python',
    },
    { type: 'rust', name: 'aws-sdk-lambda' },
    { type: 'rust', name: 'lambda_runtime' },
    { type: 'ruby', name: 'aws-sdk-lambda' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/lambda' },
    {
      type: 'terraform.resource',
      name: /^aws_lambda/,
      example: 'aws_lambda_alias',
    },
    { type: 'php', name: 'async-aws/lambda' },
    { type: 'githubAction', name: 'appleboy/lambda-action' },
  ],
});
