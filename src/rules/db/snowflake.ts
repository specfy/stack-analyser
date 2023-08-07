import { register } from '../../rules.js';

register({
  tech: 'snowflake',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/Snowflake-Labs/snowflake',
    },
    { type: 'rustcargo', name: 'snowflake' },
    { type: 'rustcargo', name: 'rs-snowflake' },
  ],
});
