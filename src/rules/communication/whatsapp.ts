import { register } from '../../register.js';

register({
  tech: 'whatsapp',
  name: 'WhatsApp',
  type: 'communication',
  dotenv: ['WHATSAPP_'],
  dependencies: [
    { type: 'npm', name: 'whatsapp-web.js' },
    { type: 'npm', name: '@neoxr/wb' },
    { type: 'npm', name: 'whatsapp-business' },
  ],
});
