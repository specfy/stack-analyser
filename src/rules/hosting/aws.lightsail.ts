import { register } from '../../register.js';

register({
  tech: 'aws.lightsail',
  name: 'AWS Lightsail',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-lightsail' },
    { type: 'npm', name: '@aws-sdk/client-lightsail' },
    { type: 'rust', name: 'aws-sdk-lightsail' },
    { type: 'ruby', name: 'aws-sdk-lightsail' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/lightsail' },
    {
      type: 'terraform.resource',
      name: /^aws_lightsail/,
      example: 'aws_lightsail_bucket',
    },
  ],
});
