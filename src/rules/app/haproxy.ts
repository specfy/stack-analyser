import { register } from '../../register.js';

register({
  tech: 'haproxy',
  name: 'HAProxy',
  type: 'app',
  dependencies: [
    { type: 'docker', name: 'haproxy' },
    { type: 'docker', name: 'haproxytech/haproxy-debian' },
    { type: 'docker', name: 'haproxytech/haproxy-alpine' },
    { type: 'docker', name: 'haproxytech/haproxy-ubuntu' },
    { type: 'docker', name: 'haproxytech/kubernetes-ingress' },
  ],
});
