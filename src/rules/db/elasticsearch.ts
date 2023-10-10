import { register } from '../../register.js';

register({
  tech: 'elasticsearch',
  name: 'Elasticsearch',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@elastic/elasticsearch' },
    { type: 'docker', name: /elasticsearch/, example: 'elasticsearch:0.0.0' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/phillbaker/elasticsearch',
    },
    { type: 'rust', name: 'elasticsearch' },
    { type: 'ruby', name: 'elasticsearch' },
    { type: 'php', name: 'elasticsearch/elasticsearch' },
    { type: 'php', name: 'ruflin/Elastica' },
    { type: 'golang', name: 'github.com/elastic/go-elasticsearch' },
    {
      type: 'githubAction',
      name: 'elastic/elastic-github-actions/elasticsearch',
    },
  ],
});
