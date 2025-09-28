import { register } from '../../register.js';

register({
  tech: 'lordicon',
  name: 'Lord Icon',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@lordicon/element' },
    { type: 'npm', name: '@lordicon/react' },
    { type: 'npm', name: '@lordicon/web' },
  ],
});
