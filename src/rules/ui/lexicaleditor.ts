import { register } from '../../register.js';

register({
  tech: 'lexicaleditor',
  name: 'Lexical Editor',
  type: 'ui',
  dependencies: [{ type: 'npm', name: 'lexical' }],
});
