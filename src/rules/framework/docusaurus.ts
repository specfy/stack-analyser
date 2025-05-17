import { register } from '../../register.js';

register({
  tech: 'docusaurus',
  name: 'Docusaurus',
  type: 'framework',
  files: ['docusaurus.config.js'],
  dependencies: [
    { type: 'npm', name: '@docusaurus/core' },
    { type: 'npm', name: 'docusaurus' },
  ],
});
