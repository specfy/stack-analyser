import { register } from '../../rules.js';

register({
  tech: 'appveyor',
  files: ['.appveyor.yml', '.appveyor.yaml'],
});
