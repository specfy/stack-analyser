import { register } from '../../rules.js';

register({
  tech: 'oraclecloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/oracle/oci' },
  ],
});
