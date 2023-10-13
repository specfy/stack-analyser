import { register } from '../../register.js';

register({
  tech: 'apache_thrift',
  name: 'Apache Thrift',
  type: 'tool',
  dependencies: [
    { type: 'docker', name: 'apache/thrift' },
    { type: 'npm', name: 'thrift' },
    { type: 'golang', name: 'github.com/apache/thrift' },
    { type: 'rust', name: 'thrift' },
    { type: 'ruby', name: 'thrift' },
  ],
});
