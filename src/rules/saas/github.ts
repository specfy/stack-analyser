import { register } from '../../rules.js';

register({
  tech: 'github',
  files: ['.github'],
  dependencies: [
    { type: 'npm', name: 'octokit' },
    { type: 'npm', name: /^@octokit\//, example: '@octokit/types' },
    { type: 'terraform', name: 'registry.terraform.io/integrations/github' },
    { type: 'ruby', name: 'octokit' },
  ],
});
