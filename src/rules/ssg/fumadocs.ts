import { register } from '../../register.js';

register({
  tech: 'fumadocs',
  name: 'FumaDocs',
  type: 'ssg',
  dependencies: [
    { type: 'npm', name: 'fumadocs-ui' },
    { type: 'npm', name: 'fumadocs-code' },
    { type: 'npm', name: 'fumadocs-mdx' },
  ],
});
