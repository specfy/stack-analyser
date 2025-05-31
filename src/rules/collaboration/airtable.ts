import { register } from '../../register.js';

register({
  tech: 'airtable',
  name: 'Airtable',
  type: 'collaboration',
  dotenv: ['AIRTABLE_'],
  dependencies: [
    { type: 'npm', name: 'airtable' },
    { type: 'php', name: 'sleiman/airtable-php' },
  ],
});
