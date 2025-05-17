import { register } from '../../register.js';

register({
  tech: 'chromadb',
  name: 'ChromaDB',
  type: 'db',
  dependencies: [{ type: 'python', name: 'chromadb' }],
});
