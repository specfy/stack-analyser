import { register } from '../../register.js';

register({
  tech: 'tdengine',
  name: 'TDengine',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'tdengine/tdengine' },
    { type: 'npm', name: '@tdengine/rest' },
    { type: 'npm', name: '@tdengine/client' },
    { type: 'golang', name: 'github.com/taosdata/driver-go/v3/taosSql' },
    { type: 'rust', name: 'taos' },
  ],
});
