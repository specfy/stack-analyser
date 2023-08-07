import { register } from '../../register.js';

register({
  tech: 'mailjet',
  name: 'Mailjet',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'node-mailjet' },
    { type: 'rust', name: 'mailjet-rs' },
    { type: 'ruby', name: 'mailjet' },
  ],
});
