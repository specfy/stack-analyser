import { register } from '../../register.js';

register({
  tech: 'aws',
  name: 'AWS',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: 'aws-sdk' },
    { type: 'npm', name: 'aws4fetch' },
    { type: 'npm', name: /^@aws-sdk\//, example: '@aws-sdk/client-' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/aws' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2' },
    { type: 'rust', name: /^aws-sdk/, example: 'aws-sdk-e2' },
    { type: 'ruby', name: /^aws-sdk/, example: 'aws-sdk-e2' },
    { type: 'docker', name: 'amazon/aws-cli' },
    { type: 'php', name: 'aws/aws-sdk-php' },
    { type: 'githubAction', name: 'aws-actions/configure-aws-credentials' },
  ],
});
