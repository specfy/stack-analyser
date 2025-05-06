import { detectRubyLockfile } from './lockfile.js';
import { register } from '../../../register.js';

register({
  tech: 'ruby',
  name: 'Ruby',
  type: 'language',
  files: ['Gemfile', 'Rakefile'],
  extensions: ['.rb', '.rbx', '.ru', '.ruby'],
  dependencies: [
    { type: 'docker', name: /ruby/, example: 'ruby:0.0.0' },
    { type: 'githubAction', name: 'ruby/setup-ruby' },
  ],
  detect: detectRubyLockfile,
});
