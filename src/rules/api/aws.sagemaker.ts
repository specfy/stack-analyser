import { register } from '../../register.js';

register({
  tech: 'aws.sagemaker',
  name: 'AWS SageMaker',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-sagemaker' },
    { type: 'npm', name: '@aws-cdk/aws-sagemaker' },
    { type: 'rust', name: 'aws-sdk-sagemaker' },
    { type: 'ruby', name: 'aws-sdk-sagemaker' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/sagemaker' },
    {
      type: 'terraform.resource',
      name: /^aws_sagemaker_/,
      example: 'aws_sagemaker_app',
    },
  ],
});
