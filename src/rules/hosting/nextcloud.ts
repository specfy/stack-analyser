import { register } from '../../register.js';

register({
  tech: 'nextcloud',
  name: 'Nextcloud',
  type: 'hosting',
  dependencies: [
    { type: 'docker', name: 'nextcloud/all-in-one' },
    { type: 'docker', name: 'nextcloud/aio-nextcloud' },
  ],
});
