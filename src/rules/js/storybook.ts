import { register } from '../../rules.js';

register({
  tech: 'storybook',
  files: ['.storybook'],
  dependencies: [{ type: 'npm', name: 'storybook' }],
});
