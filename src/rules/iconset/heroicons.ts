import { register } from '../../register.js';

register({
  tech: 'heroicons',
  name: 'Heroicons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@heroicons/react' },
    { type: 'npm', name: '@heroicons/vue' },
    { type: 'npm', name: '@iconify-json/heroicons' },
  ],
});
