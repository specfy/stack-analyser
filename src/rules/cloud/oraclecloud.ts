import { register } from '../../register.js';

register({
  tech: 'oraclecloud',
  name: 'Oracle Cloud',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: /^oci-/, example: 'oci-sdk' },
    { type: 'terraform', name: 'registry.terraform.io/oracle/oci' },
    { type: 'ruby', name: 'oci' },
    { type: 'php', name: 'oracle/oci-php-sdk' },
  ],
});
