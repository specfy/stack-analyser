import { register } from '../../register.js';

register({
  tech: 'fluentui',
  name: 'Fluent UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@fluentui\//, example: '@fluentui/react' }],
});
