import { register } from '../../register.js';

register({
  tech: 'expodev',
  name: 'Expo.dev',
  type: 'hosting',
  files: ['expo.dev'],
  dependencies: [{ type: 'githubAction', name: 'expo/expo-github-action' }],
});
