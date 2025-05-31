import { register } from '../../register.js';

register({
  tech: 'convexdb',
  name: 'Convex',
  type: 'db',
  dotenv: ['CONVEX_'],
  dependencies: [
    { type: 'npm', name: 'convex' },
    { type: 'python', name: 'convex' },
    { type: 'rust', name: 'convex' },
    { type: 'terraform.resource', name: 'airbyte_destination_convex' },
    { type: 'terraform.resource', name: 'airbyte_source_convex' },
  ],
});
