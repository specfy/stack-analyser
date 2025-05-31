import { register } from '../../register.js';

register({
  tech: 'googlesheets',
  name: 'Google Sheets',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/sheets' },
    { type: 'npm', name: 'google-spreadsheet' },
    { type: 'php', name: 'revolution/laravel-google-sheets' },
    { type: 'ruby', name: 'google-apis-sheets_v4' },
    { type: 'rust', name: 'sheets' },
    { type: 'terraform.resource', name: 'airbyte_destination_google_sheets' },
  ],
});
