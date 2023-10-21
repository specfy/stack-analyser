import { register } from '../../register.js';

register({
  tech: 'ovh.database',
  name: 'OVH Database',
  type: 'db',
  dependencies: [
    { type: 'terraform.resource', name: 'ovh_cloud_project_database' },
  ],
});
