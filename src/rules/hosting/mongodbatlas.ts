import { register } from '../../rules.js';

register({
  tech: 'mongodbatlas',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/mongodb/mongodbatlas' },
  ],
});
