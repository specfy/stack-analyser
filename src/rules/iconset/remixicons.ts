import { register } from '../../register.js';

register({
  tech: 'remixicons',
  name: 'Remix Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: 'remixicon' },
    { type: 'npm', name: '@remixicon/react' },
    { type: 'npm', name: '@remixicon/vue' },
  ],
});
