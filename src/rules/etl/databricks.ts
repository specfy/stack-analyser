import { register } from '../../register.js';

register({
  tech: 'databricks',
  name: 'Databricks',
  type: 'etl',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/databricks/databricks',
    },
  ],
});
