import { register } from '../../rules.js';

register({
  tech: 'snowflake',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/Snowflake-Labs/snowflake',
    },
    { type: 'rust', name: 'snowflake' },
    { type: 'rust', name: 'rs-snowflake' },
  ],
});
