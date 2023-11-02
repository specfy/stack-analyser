import { register } from '../../register.js';

register({
  tech: 'nginx',
  name: 'Nginx',
  type: 'app',
  files: ['nginx.conf'],
  dependencies: [
    { type: 'docker', name: 'nginx' },
    { type: 'docker', name: 'unit' },
    { type: 'docker', name: 'nginxinc/nginx-unprivileged' },
    { type: 'docker', name: 'nginx/nginx-ingress' },
    { type: 'docker', name: 'nginxinc/nginx-s3-gateway' },
    { type: 'docker', name: 'nginx/unit' },
    { type: 'docker', name: 'nginxproxy/nginx-proxy' },
    { type: 'docker', name: 'bitnami/nginx' },
    { type: 'docker', name: 'bitnami/nginx-ingress-controller' },
    { type: 'docker', name: 'ubuntu/nginx' },
    { type: 'docker', name: 'kasmweb/nginx' },
    { type: 'docker', name: 'rancher/nginx-ingress-controller' },
    { type: 'docker', name: 'rancher/nginx' },
    { type: 'docker', name: 'linuxserver/nginx' },
    { type: 'docker', name: 'privatebin/nginx-fpm-alpine' },
    { type: 'docker', name: 'wodby/nginx' },
  ],
});
