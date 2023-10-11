import { register } from '../../register.js';

register({
  tech: 'netlify',
  name: 'Netlify',
  type: 'cloud',
  files: ['netlify.toml'],
  dependencies: [
    { type: 'npm', name: 'netlify' },
    { type: 'npm', name: 'netlify-cli' },
    { type: 'npm', name: '@netlify/build' },
    { type: 'npm', name: '@netlify/plugin-emails' },
    { type: 'npm', name: '@netlify/config' },
    { type: 'npm', name: '@netlify/functions-utils' },
    { type: 'npm', name: '@netlify/cache-utils' },
    { type: 'npm', name: '@netlify/run-utils' },
    { type: 'githubAction', name: 'nwtgck/actions-netlify' },
  ],
});
