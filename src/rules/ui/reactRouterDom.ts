import { register } from '../../register.js';

register({
  tech: 'reactrouterdom',
  name: 'React Router',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: 'react-router-dom' },
    { type: 'npm', name: 'react-router' },
  ],
});
