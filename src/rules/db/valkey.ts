import { register } from '../../register.js';

register({
  tech: 'valkey',
  name: 'Valkey',
  type: 'db',
  dotenv: ['VALKEY_'],
  dependencies: [
    { type: 'python', name: 'valkey-glide' },
    { type: 'python', name: 'valkey' },
    { type: 'npm', name: '@valkey/valkey-glide' },
    { type: 'npm', name: 'iovalkey' },
    { type: 'golang', name: 'github.com/valkey-io/valkey-glide/go' },
    { type: 'golang', name: 'github.com/valkey-io/valkey-go' },
  ],
});
