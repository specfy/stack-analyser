import { register } from '../../register.js';

register({
  tech: 'reactrouter',
  name: 'React Router',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: 'react-router' },
    { type: 'npm', name: 'react-router-dom' }
  ]
});
