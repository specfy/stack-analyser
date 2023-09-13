import { register } from '../../register.js';

register({
  tech: 'meteorjs',
  name: 'Meteor',
  type: 'tool',
  files: ['.meteor'],
  dependencies: [
    { type: 'npm', name: 'meteor' },
    { type: 'npm', name: 'meteor-node-stubs' },
  ],
});
