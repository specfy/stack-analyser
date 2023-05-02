import { register } from '../../rules';

register({
  tech: 'oraclecloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/oracle/oci' },
  ],
});
