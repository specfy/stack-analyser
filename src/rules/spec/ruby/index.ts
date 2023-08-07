import { register } from '../../../rules.js';

import { detectRubyComponent } from './component.js';

register({
  tech: 'ruby',
  files: ['Gemfile', 'Rakefile', '.ruby-version'],
  dependencies: [{ type: 'docker', name: /ruby/, example: 'ruby:0.0.0' }],
  detect: detectRubyComponent,
});
