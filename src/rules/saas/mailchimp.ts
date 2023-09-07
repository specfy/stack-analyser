import { register } from '../../register.js';

register({
  tech: 'mailchimp',
  name: 'Mailchimp',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@mailchimp/mailchimp_marketing' },
    { type: 'npm', name: '@mailchimp/mailchimp_transactional' },
    { type: 'ruby', name: 'MailchimpMarketing' },
    { type: 'ruby', name: 'MailchimpTransactional' },
    { type: 'php', name: 'drewm/mailchimp-api' },
    { type: 'php', name: 'mailchimp/transactional' },
    { type: 'php', name: 'mailchimp/makerting' },
  ],
});
