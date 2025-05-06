import { register } from '../../register.js';

register({
  tech: 'swiftype',
  name: 'Swiftype',
  type: 'db',
  dependencies: [
    { type: 'ruby', name: 'site-search-ruby' },
    { type: 'npm', name: '@elastic/site-search-node' },
    { type: 'python', name: 'elastic-site-search' },
    { type: 'php', name: 'elastic/site-search' },
  ],
});
