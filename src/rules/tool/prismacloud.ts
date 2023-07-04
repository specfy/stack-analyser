import { register } from '../../rules.js';

register({
  tech: 'prismacloud',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/PaloAltoNetworks/prismacloud',
    },
  ],
});
