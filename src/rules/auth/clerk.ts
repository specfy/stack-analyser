import { register } from '../../register.js';

register({
  tech: 'clerk',
  name: 'Clerk',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: '@clerk/types' },
    { type: 'npm', name: '@clerk/nextjs' },
    { type: 'npm', name: '@clerk/clerk-react' },
    { type: 'npm', name: '@clerk/clerk-js' },
    { type: 'npm', name: '@clerk/express' },
    { type: 'npm', name: '@clerk/fastify' },
    { type: 'npm', name: '@clerk/tanstack-start' },
    { type: 'ruby', name: 'clerk-sdk-ruby' },
    { type: 'python', name: 'clerk-backend-api' },
    { type: 'golang', name: 'github.com/clerk/clerk-sdk-go/v2' },
  ],
});
