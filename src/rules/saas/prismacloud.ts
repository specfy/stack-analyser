import { register } from '../../register.js';

register({
  tech: 'prismacloud',
  name: 'Prisma Cloud',
  type: 'saas',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/PaloAltoNetworks/prismacloud',
    },
  ],
});
