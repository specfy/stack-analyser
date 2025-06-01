import { register } from '../../register.js';

register({
  tech: 'google.drive',
  name: 'Google Drive',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/drive' },
    { type: 'npm', name: 'react-google-drive-picker' },
    { type: 'npm', name: '@uppy/google-drive-picker' },
    { type: 'terraform.resource', name: 'airbyte_source_google_drive' },
    { type: 'ruby', name: 'google-apis-drive_v2' },
    { type: 'ruby', name: 'google-apis-drive_v3' },
    { type: 'rust', name: 'google-drive' },
  ],
});
