import { register } from '../../register.js';

register({
  tech: 'aws.cloudfront',
  name: 'AWS CloudFront',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-cloudfront' },
    { type: 'npm', name: '@aws-sdk/client-cloudfront' },
    { type: 'rust', name: 'aws-sdk-cloudfront' },
    { type: 'ruby', name: 'aws-sdk-cloudfront' },
    { type: 'ruby', name: 'cloudfront-signer' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/cloudfront' },
    {
      type: 'terraform.resource',
      name: /^aws_cloudfront_/,
      example: 'aws_cloudfront_function',
    },
    { type: 'php', name: 'dreamonkey/laravel-cloudfront-url-signer' },
    { type: 'githubAction', name: 'chetan/invalidate-cloudfront-action' },
  ],
});
