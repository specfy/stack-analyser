import { register } from '../../register.js';

register({
  tech: 'emberjs',
  name: 'Ember',
  type: 'framework',
  files: ['ember-cli-build.js'],
  dependencies: [
    { type: 'npm', name: 'ember-cli' },
    { type: 'npm', name: 'ember' },
    { type: 'npm', name: 'ember-data' },
    { type: 'npm', name: 'ember-source' },
  ],
});
