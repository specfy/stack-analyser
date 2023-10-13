import { register } from '../../register.js';

register({
  tech: 'apache_solr',
  name: 'Apache Solr',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'solr' },
    { type: 'docker', name: 'bitnami/solr' },
  ],
});
