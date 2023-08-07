import { register } from '../../register.js';

register({
  tech: 'oraclecloud',
  name: 'Oracle Cloud',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: /^oci-/, example: 'oci-sdk' },
    { type: 'terraform', name: 'registry.terraform.io/oracle/oci' },
    { type: 'ruby', name: 'oci' },
  ],
});
