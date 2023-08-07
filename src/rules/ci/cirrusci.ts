import { register } from '../../register.js';

register({
  tech: 'cirrusci',
  name: 'CirrusCI',
  type: 'ci',
  files: ['.cirrus.yml', '.cirrus.yaml'],
});
