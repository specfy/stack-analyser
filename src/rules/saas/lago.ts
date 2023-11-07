import { register } from '../../register.js';

register({
  tech: 'lago',
  name: 'Lago',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'lago-javascript-client' },
    { type: 'golang', name: 'github.com/getlago/lago-go-client' },
    { type: 'ruby', name: 'lago-ruby-client' },
    { type: 'python', name: 'lago-python-client' },
    { type: 'docker', name: 'getlago/front' },
    { type: 'docker', name: 'getlago/api' },
    { type: 'docker', name: 'getlago/lago-gotenberg' },
  ],
});
