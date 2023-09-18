import { register } from '../../register.js';

register({
  tech: 'firebase.firestore',
  name: 'Firebase Firestore',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^google_firestore_/,
      example: 'google_firestore_database',
    },
    { type: 'php', name: 'google/cloud-firestore' },
  ],
});
