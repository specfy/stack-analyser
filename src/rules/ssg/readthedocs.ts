import { register } from '../../register.js';

register({
  tech: 'readthedocs',
  name: 'Read The Docs',
  type: 'ssg',
  files: ['.readthedocs.yml'],
  dependencies: [{ type: 'docker', name: 'readthedocs/build' }],
});
