import { register } from '../../register.js';

register({
  tech: 'plausible',
  name: 'Plausible',
  type: 'analytics',
  dotenv: ['PLAUSIBLE_'],
  dependencies: [
    { type: 'docker', name: 'plausible/analytics' },
    { type: 'npm', name: 'plausible-tracker' },
    { type: 'php', name: 'prestashop_plausible' },
    { type: 'ruby', name: 'plausible_api' },
    { type: 'php', name: 'vincentbean/laravel-plausible' },
    { type: 'golang', name: 'github.com/andrerfcsantos/go-plausible/plausible' },
  ],
});
