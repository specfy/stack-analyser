import { register } from '../../register.js';

register({
  tech: 'lucideicons',
  name: 'Lucide Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: 'lucide-react' },
    { type: 'npm', name: 'lucide-svelte' },
    { type: 'npm', name: 'lucide-vue-next' },
    { type: 'npm', name: 'lucide-react-native' },
    { type: 'npm', name: '@iconify-json/lucide' },
    { type: 'npm', name: '@lucide/svelte' },
    { type: 'npm', name: 'lucide-angular' },
  ],
});
