import { register } from '../../rules';

register({
  tech: 'newrelic',
  dependencies: [{ type: 'npm', name: 'newrelic' }],
});
