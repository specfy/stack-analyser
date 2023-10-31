import { register } from '../../register.js';

register({
  tech: 'tidb',
  name: 'TiDB',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'pingcap/tidb' }],
});
