import { register } from '../../register.js';

register({
  tech: 'd3js',
  name: 'D3.js',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'd3' },
    { type: 'npm', name: 'd3-shape' },
    { type: 'npm', name: '@types/d3' },
    { type: 'npm', name: '@types/d3-shape' },
  ],
});
