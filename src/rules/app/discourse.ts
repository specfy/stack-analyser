import { register } from '../../register.js';

register({
  tech: 'discourse',
  name: 'Discourse',
  type: 'app',
  dependencies: [
    { type: 'docker', name: 'bitnami/discourse' },
    { type: 'docker', name: 'discourse/base' },
  ],
});
