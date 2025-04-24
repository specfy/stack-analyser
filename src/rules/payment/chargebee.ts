import { register } from '../../register.js';

register({
  tech: 'chargebee',
  name: 'Chargebee',
  type: 'payment',
  dependencies: [
    { type: 'npm', name: 'chargebee' },
    { type: 'npm', name: 'chargebee-typescript' },
    { type: 'npm', name: /^@chargebee\//, example: '@chargebee/mcp' },
    { type: 'python', name: 'chargebee' },
    { type: 'ruby', name: 'chargebee-ruby' },
    { type: 'php', name: 'chargebee/chargebee-php' },
    { type: 'golang', name: 'github.com/chargebee/chargebee-go' },
  ],
});
