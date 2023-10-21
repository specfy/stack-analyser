import { register } from '../../register.js';

register({
  tech: 'scaleway.documentdb',
  name: 'Scaleway DocumentDB',
  type: 'db',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_documentdb_instance' },
  ],
});
