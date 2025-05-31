import { register } from '../../register.js';

register({
  tech: 'react',
  name: 'React',
  type: 'ui_framework',
  extensions: ['.tsx', '.jsx'],
  dependencies: [{ type: 'npm', name: 'react' }],
});
