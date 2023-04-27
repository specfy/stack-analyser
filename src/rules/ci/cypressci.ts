import { register } from '../../rules';

register({
  tech: 'cypressci',
  files: /cypress.config.(js|ts|mjs|cjs)/,
  dependencies: [
    { type: 'npm', name: 'cypress' },
    { type: 'docker', name: /cypress/ },
  ],
});
