import { register } from '../../rules';

register({
  tech: 'mailjet',
  dependencies: [{ type: 'npm', name: 'node-mailjet' }],
});
