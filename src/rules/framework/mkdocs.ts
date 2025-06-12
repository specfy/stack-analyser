import { register } from '../../register.js';

register({
  tech: 'mkdocs',
  name: 'MkDocs',
  type: 'framework',
  files: ['mkdocs.yml'],
  dependencies: [
    { type: 'python', name: 'mkdocs' },
    { type: 'docker', name: 'squidfunk/mkdocs-material' },
  ],
});
