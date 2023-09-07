import { register } from '../../register.js';

register({
  tech: 'dropbox',
  name: 'Dropbox',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'spatie/dropbox-api' }],
});
