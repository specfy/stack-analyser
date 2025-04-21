import { register } from '../../register.js';

register({
  tech: 'gradio',
  name: 'Gradio',
  type: 'framework',
  dependencies: [{ type: 'python', name: 'gradio' }],
});
