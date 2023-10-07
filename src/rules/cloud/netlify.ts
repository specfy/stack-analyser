import { register } from '../../register.js';

register({
  tech: 'netlify',
  name: 'Netlify',
  type: 'cloud',
  files: ['netlify.toml'],
  dependencies: [
    { type: 'npm', name: 'netlify' },
    { type: 'npm', name: 'netlify-cli' },
    { type: 'npm', name: /^@netlify\//, example: '@netlify/plugin-emails' },
    { type: 'githubAction', name: 'nwtgck/actions-netlify' },
  ],
});
