import { register } from '../../register.js';

register({
  tech: 'drupal',
  name: 'Drupal',
  type: 'framework',
  dependencies: [
    { type: 'docker', name: 'drupal' },
    { type: 'php', name: 'drupal/core' },
    { type: 'php', name: 'drupal/core-recommended' },
    { type: 'php', name: 'drupal/drupal-extension' },
    { type: 'php', name: 'webflo/drupal-finder' },
    { type: 'php', name: 'mglaman/phpstan-drupal' },
  ],
});
