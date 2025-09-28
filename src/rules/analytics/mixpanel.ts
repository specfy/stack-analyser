import { register } from '../../register.js';

register({
  tech: 'mixpanel',
  name: 'Mixpanel',
  type: 'analytics',
  dotenv: ['MIXPANEL_'],
  dependencies: [
    { type: 'php', name: 'mixpanel/mixpanel-php' },
    { type: 'npm', name: 'mixpanel-browser' },
    { type: 'python', name: 'mixpanel' },
    { type: 'npm', name: 'mixpanel' },
    { type: 'ruby', name: 'mixpanel-ruby' },
    { type: 'golang', name: 'github.com/mixpanel/mixpanel-go' },
    { type: 'terraform.resource', name: 'airbyte_source_mixpanel' },
    { type: 'npm', name: '@analytics/mixpanel' },
  ],
});
