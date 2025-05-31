import { register } from '../../register.js';

register({
  tech: 'aws.codepipeline',
  name: 'AWS Code Pipeline',
  type: 'ci',
  dependencies: [{ type: 'githubAction', name: 'zulhfreelancer/aws-codepipeline-action' }],
});
