import { register } from '../../register.js';

register({
  tech: 'phppest',
  name: 'PHP Pest',
  type: 'tool',
  dependencies: [{ type: 'php', name: 'pestphp/pest' }],
});
