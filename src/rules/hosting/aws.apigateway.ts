import { register } from '../../register.js';

register({
  tech: 'aws.apigateway',
  name: 'AWS Api Gateway',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-apigateway' },
    { type: 'npm', name: '@aws-sdk/client-apigateway' },
    { type: 'rust', name: 'aws-sdk-apigateway' },
    { type: 'ruby', name: 'aws-sdk-apigateway' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/apigateway' },
    {
      type: 'terraform.resource',
      name: /^aws_api_gateway_/,
      example: 'aws_api_gateway_deployment',
    },
  ],
});
