import { register } from '../../register.js';

register({
  tech: 'aws.fargate',
  name: 'AWS Fargate',
  type: 'hosting',
  dependencies: [
    { type: 'githubAction', name: 'aws-actions/amazon-eks-fargate' },
  ],
});
