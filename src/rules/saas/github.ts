import { register } from '../../register.js';

register({
  tech: 'github',
  name: 'GitHub',
  type: 'saas',
  files: ['.github'],
  dependencies: [
    { type: 'npm', name: 'octokit' },
    { type: 'npm', name: /^@octokit\//, example: '@octokit/types' },
    { type: 'terraform', name: 'registry.terraform.io/integrations/github' },
    { type: 'ruby', name: 'octokit' },
    { type: 'php', name: 'knplabs/github-api' },
    { type: 'npm', name: '@pulumi/github' },
    { type: 'python', name: 'PyGithub' },
    { type: 'terraform.resource', name: 'airbyte_source_github' },
  ],
});
