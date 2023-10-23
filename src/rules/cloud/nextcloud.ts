import { register } from '../../register.js';

register({
  tech: 'nextcloud',
  name: 'Nextcloud',
  type: 'cloud',
  dependencies: [
    { type: 'docker', name: 'nextcloud/all-in-one' },
    { type: 'docker', name: 'nextcloud' },
    { type: 'docker', name: 'nextcloud/aio-nextcloud' },
  ],
});
