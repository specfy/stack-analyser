import { register } from '../../register.js';

register({
  tech: 'gitbook',
  name: 'Gitbook',
  type: 'cms',
  dependencies: [{ type: 'npm', name: /^@gitbook\//, example: '@gitbook/api' }],
});
