import { register } from '../../register.js';

register({
  tech: 'phppest',
  name: 'PHP Pest',
  type: 'test',
  dependencies: [{ type: 'php', name: 'pestphp/pest' }],
});
