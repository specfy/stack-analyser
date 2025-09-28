import { register } from '../../register.js';

register({
  tech: 'hugeicons',
  name: 'HugeIcons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@hugeicons/react' },
    { type: 'npm', name: '@hugeicons/vue' },
    { type: 'npm', name: '@hugeicons/svelte' },
    { type: 'npm', name: '@hugeicons/angular' },
    { type: 'npm', name: '@hugeicons/react-native' },
    { type: 'npm', name: '@hugeicons/core-free-icons' },
    { type: 'npm', name: '@iconify-json/hugeicons' },
  ],
});
