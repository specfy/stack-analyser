import { register } from '../../rules.js';

register({
  tech: 'oraclecloud',
  dependencies: [
    { type: 'npm', name: /^oci-/, example: 'oci-sdk' },
    { type: 'terraform', name: 'registry.terraform.io/oracle/oci' },
  ],
});
