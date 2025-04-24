import { register } from '../../register.js';

register({
  tech: 'redwoodjs',
  name: 'RedwoodJs',
  type: 'framework',
  files: ['redwood.toml'],
  dependencies: [
    { type: 'npm', name: '@vercel/redwood' },
    { type: 'npm', name: '@redwoodjs/api-server' },
    { type: 'npm', name: '@redwoodjs/telemetry' },
    { type: 'npm', name: '@redwoodjs/auth' },
    { type: 'npm', name: '@redwoodjs/api' },
    { type: 'npm', name: '@redwoodjs/core' },
    { type: 'npm', name: '@redwoodjs/web' },
    { type: 'npm', name: '@defer/redwood' },
    { type: 'npm', name: 'inngest-setup-redwoodjs' },
  ],
});
