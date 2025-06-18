import { register } from '../../register.js';

register({
  tech: 'gradio',
  name: 'Gradio',
  type: 'ui',
  dependencies: [{ type: 'python', name: 'gradio' }],
});
