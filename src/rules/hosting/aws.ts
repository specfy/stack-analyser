import { register } from '../../rules.js';

register({
  tech: 'aws',
  dependencies: [
    { type: 'npm', name: 'aws-sdk' },
    { type: 'npm', name: /@aws-sdk\//, example: '@aws-sdk/client-s3' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/aws' },
    { type: 'gomod', name: 'github.com/aws/aws-sdk-go' },
    { type: 'gomod', name: 'github.com/aws/aws-sdk-go-v2' },
  ],
});
