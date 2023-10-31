import { register } from '../../register.js';

register({
  tech: 'atlassian.jira',
  name: 'Jira',
  type: 'saas',
  dependencies: [
    { type: 'githubAction', name: 'atlassian/gajira-todo' },
    { type: 'githubAction', name: 'github/ghas-jira-integration' },
    { type: 'githubAction', name: 'atlassian/gajira-transition' },
    { type: 'githubAction', name: 'atlassian/gajira-create' },
    { type: 'githubAction', name: 'atlassian/gajira-cli' },
    { type: 'githubAction', name: 'atlassian/gajira-find-issue-key' },
    { type: 'githubAction', name: 'atlassian/gajira-comment' },
    { type: 'docker', name: 'atlassian/jira-software' },
    { type: 'npm', name: 'jira.js' },
    { type: 'php', name: 'lesstif/php-jira-rest-client' },
    { type: 'ruby', name: 'jira-ruby' },
    { type: 'terraform.resource', name: 'gitlab_integration_jira' },
  ],
});
