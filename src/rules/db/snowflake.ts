import { register } from '../../register.js';

register({
  tech: 'snowflake',
  name: 'Snowflake',
  type: 'db',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/Snowflake-Labs/snowflake',
    },
    { type: 'rust', name: 'snowflake' },
    { type: 'rust', name: 'rs-snowflake' },
    { type: 'npm', name: '@pulumi/snowflake' },
    { type: 'ruby', name: 'sequel-snowflake' },
    { type: 'terraform.resource', name: 'airbyte_destination_snowflake' },
  ],
});
