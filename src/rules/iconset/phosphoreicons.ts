import { register } from '../../register.js';

register({
  tech: 'phosphoreicons',
  name: 'Phosphor Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@phosphor-icons/react' },
    { type: 'npm', name: '@phosphor-icons/vue' },
    { type: 'npm', name: '@phosphor-icons/webcomponents' },
    { type: 'npm', name: '@phosphor-icons/web' },
  ],
});
