import { register } from '../../register.js';

register({
  tech: 'fontawesome',
  name: 'Font Awesome',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@fortawesome/react-fontawesome' },
    { type: 'npm', name: '@fortawesome/vue-fontawesome' },
    { type: 'npm', name: '@iconify-json/fa6-brands' },
    { type: 'npm', name: '@iconify-json/fa6-regular' },
  ],
});
