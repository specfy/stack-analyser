import { register } from '../../register.js';

register({
  tech: 'meteorjs',
  name: 'Meteor',
  type: 'framework',
  files: ['.meteor'],
  dependencies: [
    { type: 'npm', name: 'meteor' },
    { type: 'npm', name: 'meteor-node-stubs' },
  ],
});
