import { register } from '../../register.js';

register({
  tech: 'fusionauth',
  name: 'Fusionauth',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@fusionauth\//, example: '@fusionauth/typescript-client' },
    { type: 'golang', name: 'github.com/FusionAuth/go-client/pkg/fusionauth' },
    { type: 'php', name: 'fusionauth/fusionauth-client' },
    { type: 'python', name: 'fusionauth-client' },
    { type: 'ruby', name: 'fusionauth_client' },
  ],
});
