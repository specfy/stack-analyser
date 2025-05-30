import { register } from '../../register.js';

register({
  tech: 'twilio',
  name: 'Twilio',
  type: 'notification',
  dotenv: ['TWILIO_'],
  dependencies: [
    { type: 'npm', name: 'twilio' },
    { type: 'npm', name: /^@twilio\//, example: '@twilio/cli-core' },
    { type: 'php', name: 'twilio/sdk' },
    { type: 'githubAction', name: 'twilio-labs/actions-sms' },
    { type: 'golang', name: 'github.com/twilio/twilio-go' },
    { type: 'ruby', name: 'twilio-ruby' },
    { type: 'terraform.resource', name: 'airbyte_source_twilio' },
  ],
});
