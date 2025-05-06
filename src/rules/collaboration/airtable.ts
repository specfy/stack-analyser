import { register } from '../../register.js';

register({
  tech: 'airtable',
  name: 'Airtable',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: 'airtable' },
    { type: 'php', name: 'sleiman/airtable-php' },
  ],
});
