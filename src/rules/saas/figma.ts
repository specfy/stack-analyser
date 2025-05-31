import { register } from '../../register.js';

register({
  tech: 'figma',
  name: 'Figma',
  type: 'saas',
  dotenv: ['FIGMA_'],
  dependencies: [{ type: 'npm', name: /^@figma\//, example: '@figma/plugin-typings' }],
});
