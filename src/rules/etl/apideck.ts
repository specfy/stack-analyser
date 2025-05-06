import { register } from '../../register.js';

register({
  tech: 'apideck',
  name: 'Apideck',
  type: 'etl',
  dependencies: [
    { type: 'npm', name: /^@apideck\//, example: '@apideck/unify' },
    { type: 'php', name: 'apideck-libraries/sdk-php' },
    { type: 'python', name: 'apideck-unify' },
    { type: 'golang', name: 'github.com/apideck-libraries/sdk-go' },
  ],
});
