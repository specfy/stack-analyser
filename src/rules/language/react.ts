import { register } from '../../register.js';

register({
  tech: 'react',
  name: 'React',
  type: 'language',
  extensions: ['.tsx', '.jsx'],
  dependencies: [{ type: 'npm', name: 'react' }],
});
