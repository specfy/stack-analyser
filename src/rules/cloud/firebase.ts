import { register } from '../../register.js';

register({
  tech: 'firebase',
  name: 'Hosting',
  type: 'cloud',
  files: ['.firebaserc'],
  dependencies: [
    { type: 'ruby', name: 'fastlane-plugin-firebase_app_distribution' },
    { type: 'rust', name: 'firebase-rs' },
    { type: 'npm', name: 'firebase' },
    { type: 'npm', name: /^@firebase\//, example: '@firebase/auth' },
    { type: 'githubAction', name: 'w9jds/firebase-action' },
    {
      type: 'githubAction',
      name: 'wzieba/Firebase-Distribution-Github-Action',
    },
  ],
});
