import { register } from '../../register.js';

register({
  tech: 'feathericons',
  name: 'Feather Icons',
  type: 'iconset',
  dependencies: [
    { type: 'npm', name: 'feather-icons' },
    { type: 'npm', name: 'react-feather' },
    { type: 'npm', name: 'react-native-feather' },
  ],
});
