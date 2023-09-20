import { register } from '../../register.js';

register({
  tech: 'posthog',
  name: 'PostHog',
  type: 'analytics',
  dependencies: [
    { type: 'npm', name: 'posthog-js' },
    { type: 'golang', name: 'github.com/posthog/posthog-go' },
    { type: 'npm', name: 'posthog-node' },
    { type: 'php', name: 'posthog/posthog-php' },
    { type: 'ruby', name: 'posthog-ruby' },
    { type: 'rust', name: 'posthog-rs' },
    { type: 'npm', name: 'posthog-react-native' },
  ],
});
