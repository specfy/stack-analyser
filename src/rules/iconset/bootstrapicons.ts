import { register } from '../../register.js';

register({
  tech: 'bootstrapicons',
  name: 'Bootstrap Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: 'bootstrap-icons' },
    { type: 'npm', name: 'react-bootstrap-icons' },
    { type: 'npm', name: '@iconify-json/bi' },
    { type: 'npm', name: 'svelte-bootstrap-icons' },
  ],
});
