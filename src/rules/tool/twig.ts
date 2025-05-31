import { register } from '../../register.js';

register({
  tech: 'twigphp',
  name: 'Twig',
  type: 'tool',
  dependencies: [{ type: 'php', name: 'twig/twig' }],
});
