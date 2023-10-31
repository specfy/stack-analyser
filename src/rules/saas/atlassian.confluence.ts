import { register } from '../../register.js';

register({
  tech: 'atlassian.confluence',
  name: 'Confluence',
  type: 'saas',
  dependencies: [
    { type: 'githubAction', name: 'Bhacaz/docs-as-code-confluence' },
    { type: 'docker', name: 'atlassian/confluence-server' },
    { type: 'docker', name: 'atlassian/confluence' },
    { type: 'npm', name: 'confluence.js' },
    { type: 'npm', name: 'confluence-api' },
  ],
});
