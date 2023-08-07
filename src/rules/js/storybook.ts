import { register } from '../../register.js';

register({
  tech: 'storybook',
  name: 'Storybook',
  type: 'tool',
  files: ['.storybook'],
  dependencies: [{ type: 'npm', name: 'storybook' }],
});
