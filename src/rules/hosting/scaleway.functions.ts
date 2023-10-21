import { register } from '../../register.js';

register({
  tech: 'scaleway.function',
  name: 'Scaleway Function',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_function' },
    { type: 'terraform.resource', name: 'scaleway_function_cron' },
  ],
});
