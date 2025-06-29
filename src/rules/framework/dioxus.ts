import { register } from '../../register.js';

register({
  tech: 'dioxus',
  name: 'Dioxus',
  type: 'framework',
  dependencies: [
    { type: 'rust', name: 'dioxus' },
    { type: 'rust', name: 'dioxus-cli' },
  ],
});
