import { register } from '../../register.js';

register({
  tech: 'joomla',
  name: 'Joomla!',
  type: 'tool',
  dependencies: [
    { type: 'php', name: 'joomla/application' },
    { type: 'docker', name: 'joomla' },
  ],
});
