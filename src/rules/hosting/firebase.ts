import { register } from '../../rules.js';

register({
  tech: 'firebase',
  files: ['.firebaserc'],
  dependencies: [
    { type: 'ruby', name: 'fastlane-plugin-firebase_app_distribution' },
    { type: 'rust', name: 'firebase-rs' },
    { type: 'npm', name: 'firebase' },
    { type: 'npm', name: /^@firebase\//, example: '@firebase/auth' },
  ],
});
