import { register } from '../../register.js';

register({
  tech: 'coveralls',
  name: 'Coveralls',
  type: 'ci',
  files: ['.codecov.yml', 'codecov.yml'],
  dependencies: [
    { type: 'githubAction', name: 'coverallsapp/github-action' },
    {
      type: 'npm',
      name: 'node-coveralls',
    },
    { type: 'golang', name: 'goveralls' },
    { type: 'npm', name: 'php-coveralls' },
    { type: 'ruby', name: 'coveralls-ruby-reborn' },
  ],
});
