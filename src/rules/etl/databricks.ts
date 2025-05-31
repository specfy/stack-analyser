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
    { type: 'githubAction', name: 'databricks/run-notebook' },
    { type: 'terraform.resource', name: 'airbyte_destination_databricks' },
  ],
});
