import { register } from '../../register.js';

register({
  tech: 'figma',
  name: 'Figma',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@figma\//, example: '@figma/plugin-typings' },
  ],
});
