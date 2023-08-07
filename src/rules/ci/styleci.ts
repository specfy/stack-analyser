import { register } from '../../register.js';

register({
  tech: 'styleci',
  name: 'StyleCI',
  type: 'ci',
  files: ['.styleci.yml', '.styleci.yaml'],
});
