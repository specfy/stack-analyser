import { register } from '../../register.js';

register({
  tech: 'dokku',
  name: 'Dokku',
  type: 'cloud',
  dotenv: ['DOKKU_'],
  dependencies: [
    { type: 'githubAction', name: 'dokku/github-action' },
    { type: 'docker', name: 'dokku/ci-docker-image' },
    { type: 'docker', name: 'dokku/dokku' },
  ],
});
