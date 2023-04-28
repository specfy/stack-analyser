import { register } from '../../rules';

register({
  tech: 'elasticsearch',
  dependencies: [
    { type: 'npm', name: '@elastic/elasticsearch' },
    { type: 'docker', name: /elasticsearch/, example: 'elasticsearch:0.0.0' },
  ],
});
