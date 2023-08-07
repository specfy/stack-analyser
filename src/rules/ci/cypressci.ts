import { register } from '../../rules.js';

register({
  tech: 'cypressci',
  files: /cypress.config.(js|ts|mjs|cjs)/,
  example: 'cypress.config.js',
  dependencies: [
    { type: 'npm', name: 'cypress' },
    { type: 'docker', name: /cypress/, example: 'cypress:0.0.0' },
    { type: 'ruby', name: 'cypress-on-rails' },
  ],
});
