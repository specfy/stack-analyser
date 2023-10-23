import { register } from '../../register.js';

register({
  tech: 'eleventy',
  name: 'Eleventy',
  type: 'framework',
  files: ['.eleventy.js', 'eleventy.config.js', 'eleventy.config.cjs'],
  dependencies: [
    { type: 'npm', name: '@11ty/eleventy' },
    { type: 'githubAction', name: 'TartanLlama/actions-eleventy' },
  ],
});
