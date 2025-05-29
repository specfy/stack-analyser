import { register } from '../../register.js';

register({
  tech: 'dokku',
  name: 'Dokku',
  type: 'cloud',
  dependencies: [
    { type: 'githubAction', name: 'dokku/github-action' },
    { type: 'docker', name: 'dokku/ci-docker-image' },
    { type: 'docker', name: 'dokku/dokku' },
  ],
});
