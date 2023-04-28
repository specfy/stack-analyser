import { register } from '../../rules';

register({
  tech: 'netlify',
  files: ['netlify.toml'],
  dependencies: [
    { type: 'npm', name: 'netlify' },
    { type: 'npm', name: 'netlify-cli' },
  ],
});
