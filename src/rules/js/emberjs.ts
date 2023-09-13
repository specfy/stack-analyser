import { register } from '../../register.js';

register({
  tech: 'emberjs',
  name: 'Ember',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'ember-cli' },
    { type: 'npm', name: 'ember' },
    { type: 'npm', name: 'ember-data' },
    { type: 'npm', name: 'ember-source' },
  ],
});
