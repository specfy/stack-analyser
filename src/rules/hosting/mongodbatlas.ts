import { register } from '../../rules';

register({
  tech: 'mongodbatlas',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/mongodb/mongodbatlas' },
  ],
});
