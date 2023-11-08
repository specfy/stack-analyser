import { register } from '../../register.js';

register({
  tech: 'cypressci',
  name: 'CypressCI',
  type: 'ci',
  files: /cypress.config.(js|ts|mjs|cjs)/,
  example: 'cypress.config.js',
  dependencies: [
    { type: 'npm', name: 'cypress' },
    { type: 'npm', name: 'gatsby-cypress' },
    { type: 'docker', name: /cypress/, example: 'cypress:0.0.0' },
    { type: 'ruby', name: 'cypress-on-rails' },
    { type: 'githubAction', name: 'cypress-io/github-action' },
  ],
});
