import { register } from '../../rules.js';

register({
  tech: 'circleci',
  files: ['.circleci', 'circle.yml', 'circle.yaml'],
});
