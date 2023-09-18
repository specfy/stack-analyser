import { register } from '../../register.js';

register({
  tech: 'aws.eks',
  name: 'AWS Kubernetes',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-eks' },
    { type: 'npm', name: '@aws-sdk/client-eks' },
    { type: 'rust', name: 'aws-sdk-eks' },
    { type: 'ruby', name: 'aws-sdk-eks' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/eks' },
    {
      type: 'terraform.resource',
      name: /^aws_eks_/,
      example: 'aws_eks_cluster',
    },
  ],
});
