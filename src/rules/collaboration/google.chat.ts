import { register } from '../../register.js';

register({
  tech: 'google.chat',
  name: 'Google Chat',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/chat' },
    { type: 'terraform.resource', name: 'airbyte_source_google_calendar' },
    { type: 'ruby', name: 'google-apis-chat_v1' },
    { type: 'ruby', name: 'google-apps-chat-v1' },
    { type: 'ruby', name: 'google-apps-chat' },
  ],
});
