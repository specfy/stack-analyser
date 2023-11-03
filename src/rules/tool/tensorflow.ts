import { register } from '../../register.js';

register({
  tech: 'tensorflow',
  name: 'Tensorflow',
  type: 'tool',
  dependencies: [
    { type: 'docker', name: 'tensorflow/tensorflow' },
    { type: 'npm', name: '@tensorflow/tfjs-core' },
    { type: 'npm', name: '@tensorflow/tfjs' },
    { type: 'npm', name: 'face-api.js' },
    { type: 'golang', name: 'github.com/wamuir/graft/tensorflow' },
    { type: 'python', name: 'tensorflow' },
  ],
});
