import { register } from '../../register.js';

register({
  tech: 'supertokens',
  name: 'SuperTokens',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: 'supertokens-web-js' },
    { type: 'npm', name: 'supertokens-node' },
    { type: 'golang', name: 'github.com/supertokens/supertokens-golang' },
    { type: 'python', name: 'supertokens_python' },
    { type: 'npm', name: 'supertokens-auth-react' },
  ],
});
