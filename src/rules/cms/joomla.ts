import { register } from '../../register.js';

register({
  tech: 'joomla',
  name: 'Joomla!',
  type: 'cms',
  dependencies: [
    { type: 'php', name: 'joomla/application' },
    { type: 'docker', name: 'joomla' },
  ],
});
