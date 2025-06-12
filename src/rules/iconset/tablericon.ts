import { register } from '../../register.js';

register({
  tech: 'tablericon',
  name: 'Tabler',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@tabler/icons-react' },
    { type: 'npm', name: '@tabler/icons' },
    { type: 'npm', name: '@tabler/icons-vue' },
    { type: 'npm', name: '@steeze-ui/tabler-icons' },
    { type: 'npm', name: '@iconify-json/tabler' },
  ],
});
