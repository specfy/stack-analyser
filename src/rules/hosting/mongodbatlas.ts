import { register } from '../../register.js';

register({
  tech: 'mongodbatlas',
  name: 'MongoDB Atlas',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/mongodb/mongodbatlas' },
  ],
});
