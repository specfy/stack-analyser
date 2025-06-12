import { register } from '../../register.js';

register({
  tech: 'composio',
  name: 'Composio',
  type: 'etl',
  dotenv: ['COMPOSIO_'],
  dependencies: [
    { type: 'npm', name: 'composio-core' },
    { type: 'npm', name: /@composio\//, example: '@composio/client' },
    { type: 'python', name: 'composio-core' },
  ],
});
