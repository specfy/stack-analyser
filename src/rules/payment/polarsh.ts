import { register } from '../../register.js';

register({
  tech: 'polarsh',
  name: 'Polar',
  type: 'payment',
  dotenv: ['POLARSH_'],
  dependencies: [
    { type: 'npm', name: /^@polar-sh\//, example: '@polar-sh/mcp' },
    { type: 'python', name: 'polar-sdk' },
    { type: 'php', name: 'polar-sh/sdk' },
    { type: 'golang', name: 'github.com/polarsource/polar-go' },
  ],
});
