import { register } from '../../register.js';

register({
  tech: 'chakraui',
  name: 'Chakra UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@chakra-ui\//, example: '@chakra-ui/react' }],
});
