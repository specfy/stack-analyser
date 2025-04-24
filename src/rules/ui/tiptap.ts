import { register } from '../../register.js';

register({
  tech: 'tiptap',
  name: 'Tiptap',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@tiptap\//, example: '@tiptap/react' }],
});
