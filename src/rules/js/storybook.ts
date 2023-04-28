import { register } from '../../rules';

register({
  tech: 'storybook',
  files: ['.storybook'],
  dependencies: [{ type: 'npm', name: 'storybook' }],
});
