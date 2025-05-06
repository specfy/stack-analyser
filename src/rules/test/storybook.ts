import { register } from '../../register.js';

register({
  tech: 'storybook',
  name: 'Storybook',
  type: 'test',
  files: ['.storybook'],
  dependencies: [{ type: 'npm', name: 'storybook' }],
});
