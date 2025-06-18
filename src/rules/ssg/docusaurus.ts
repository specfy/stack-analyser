import { register } from '../../register.js';

register({
  tech: 'docusaurus',
  name: 'Docusaurus',
  type: 'ssg',
  files: ['docusaurus.config.js'],
  dependencies: [
    { type: 'npm', name: '@docusaurus/core' },
    { type: 'npm', name: 'docusaurus' },
  ],
});
