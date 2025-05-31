import { register } from '../../register.js';

register({
  tech: 'ibmcloud',
  name: 'IBM Cloud',
  type: 'cloud',
  dependencies: [{ type: 'terraform', name: 'registry.terraform.io/IBM-Cloud/ibm' }],
});
