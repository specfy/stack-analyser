import { register } from '../../register.js';

register({
  tech: 'materialui',
  name: 'Material UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@mui\//, example: '@mui/material' }],
});
