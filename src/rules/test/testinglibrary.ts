import { register } from '../../register.js';

register({
  tech: 'testinglibrary',
  name: 'Testing Library',
  type: 'test',
  dependencies: [{ type: 'npm', name: /^@testing-library\//, example: '@testing-library/react' }],
});
