import { register } from '../../register.js';

register({
  tech: 'goacmelego',
  name: 'Lego',
  type: 'tool',
  files: ['.lego'],
  dependencies: [
    { type: 'docker', name: 'goacme/lego' },
    { type: 'golang', name: 'github.com/go-acme/lego/v4/cmd/lego' },
  ],
});
