import { register } from '../../register.js';

register({
  tech: 'sandpackeditor',
  name: 'Sandpack',
  type: 'ui',
  dependencies: [{ type: 'npm', name: '@codesandbox/sandpack-react' }],
});
