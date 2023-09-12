import { register } from '../../register.js';

register({
  tech: 'heroku',
  name: 'Heroku',
  type: 'hosting',
  files: ['app.json'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/heroku/heroku' },
    { type: 'ruby', name: 'platform-api' },
    { type: 'php', name: 'heroku/heroku-buildpack-php' },
    { type: 'githubAction', name: 'akhileshns/heroku-deploy' },
  ],
});
