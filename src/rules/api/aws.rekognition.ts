import { register } from '../../register.js';

register({
  tech: 'aws.rekognition',
  name: 'AWS Rekognition',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-rekognition' },
    { type: 'npm', name: '@aws-cdk/aws-rekognition' },
    { type: 'rust', name: 'aws-sdk-rekognition' },
    { type: 'ruby', name: 'aws-sdk-rekognition' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/rekognition',
    },
    {
      type: 'terraform.resource',
      name: /^aws_rekognition_/,
      example: 'aws_rekognition_app',
    },
  ],
});
