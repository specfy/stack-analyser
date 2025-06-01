import { register } from '../../register.js';

register({
  tech: 'google.keep',
  name: 'Google Keep',
  type: 'collaboration',
  dependencies: [{ type: 'ruby', name: 'google-apis-keep_v1' }],
});
