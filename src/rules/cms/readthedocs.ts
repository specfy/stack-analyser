import { register } from '../../register.js';

register({
  tech: 'readthedocs',
  name: 'Read The Docs',
  type: 'cms',
  files: ['.readthedocs.yml'],
  dependencies: [{ type: 'docker', name: 'readthedocs/build' }],
});
