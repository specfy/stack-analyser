import { register } from '../../register.js';

register({
  tech: 'reddit',
  name: 'Reddit',
  type: 'communication',
  dotenv: ['REDDIT_'],
  dependencies: [{ type: 'npm', name: 'snoowrap' }],
});
