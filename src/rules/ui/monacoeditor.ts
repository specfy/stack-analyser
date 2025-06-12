import { register } from '../../register.js';

register({
  tech: 'monacoeditor',
  name: 'Monaco Editor',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: 'monaco-editor' },
    { type: 'npm', name: '@monaco-editor/loader' },
    { type: 'npm', name: '@monaco-editor/react' },
  ],
});
