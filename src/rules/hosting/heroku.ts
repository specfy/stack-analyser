import { register } from '../../rules.js';

register({
  tech: 'heroku',
  files: ['app.json'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/heroku/heroku' },
    { type: 'ruby', name: 'platform-api' },
  ],
});
