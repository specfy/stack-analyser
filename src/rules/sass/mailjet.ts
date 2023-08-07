import { register } from '../../rules.js';

register({
  tech: 'mailjet',
  dependencies: [
    { type: 'npm', name: 'node-mailjet' },
    { type: 'rust', name: 'mailjet-rs' },
  ],
});
