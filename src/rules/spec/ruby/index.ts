import { register } from '../../../register.js';

import { detectRubyLockfile } from './lockfile.js';

register({
  tech: 'ruby',
  name: 'Ruby',
  type: 'language',
  files: ['Gemfile', 'Rakefile', '.ruby-version'],
  dependencies: [{ type: 'docker', name: /ruby/, example: 'ruby:0.0.0' }],
  detect: detectRubyLockfile,
});
