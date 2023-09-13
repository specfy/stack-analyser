import { register } from '../../register.js';

register({
  tech: 'circleci',
  name: 'CircleCI',
  type: 'ci',
  files: ['.circleci', 'circle.yml', 'circle.yaml'],
  dependencies: [
    { type: 'ruby', name: 'circleci' },
    {
      type: 'githubAction',
      name: 'CircleCI-Public/trigger-circleci-pipeline-action',
    },
  ],
});
