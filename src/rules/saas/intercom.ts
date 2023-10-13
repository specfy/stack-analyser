import { register } from '../../register.js';

register({
  tech: 'intercom',
  name: 'Intercom',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'react-use-intercom' },
    { type: 'npm', name: 'intercom-client' },
    { type: 'npm', name: '@intercom/intercom-react-native' },
    { type: 'npm', name: 'ng-intercom' },
    { type: 'php', name: 'intercom/intercom-php' },
    { type: 'php', name: 'intercom/oauth2-intercom' },
    { type: 'ruby', name: 'intercom' },
    { type: 'ruby', name: 'intercom-rails' },
  ],
});
