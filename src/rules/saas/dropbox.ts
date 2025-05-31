import { register } from '../../register.js';

register({
  tech: 'dropbox',
  name: 'Dropbox',
  type: 'saas',
  dotenv: ['DROPBOX_'],
  dependencies: [{ type: 'php', name: 'spatie/dropbox-api' }],
});
