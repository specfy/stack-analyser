import { register } from '../../rules.js';

register({
  tech: 'cirrusci',
  files: ['.cirrus.yml', '.cirrus.yaml'],
});
