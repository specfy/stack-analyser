import { register } from '../../register.js';

register({
  tech: 'codemirror',
  name: 'CodeMirror',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: 'codemirror' },
    { type: 'npm', name: /@codemirror\//, example: '@codemirror/view' },
  ],
});
