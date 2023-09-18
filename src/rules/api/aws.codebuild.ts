import { register } from '../../register.js';

register({
  tech: 'aws.codebuild',
  name: 'AWS Code Build',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-codebuild' },
    { type: 'rust', name: 'aws-sdk-codebuild' },
    { type: 'ruby', name: 'aws-sdk-codebuild' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/codebuild' },
    {
      type: 'terraform.resource',
      name: /^aws_codebuild_/,
      example: 'aws_codebuild_project',
    },
    { type: 'githubAction', name: 'aws-actions/aws-codebuild-run-build' },
  ],
});
