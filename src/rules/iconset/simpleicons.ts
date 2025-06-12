import { register } from '../../register.js';

register({
  tech: 'simpleicons',
  name: 'Simple Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: '@icons-pack/react-simple-icons' },
    { type: 'npm', name: 'simple-icons' },
    { type: 'npm', name: '@iconify/json/simple-icons' },
  ],
});
