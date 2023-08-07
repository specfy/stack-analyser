import { register } from '../../register.js';

register({
  tech: 'appveyor',
  name: 'AppVeyor',
  type: 'ci',
  files: ['.appveyor.yml', '.appveyor.yaml'],
});
