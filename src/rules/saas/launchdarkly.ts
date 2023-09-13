import { register } from '../../register.js';

register({
  tech: 'launchdarkly',
  name: 'LaunchDarkly',
  type: 'saas',
  dependencies: [
    {
      type: 'npm',
      name: /launchdarkly-.+-client-sdk/,
      example: 'launchdarkly-react-client-sdk',
    },
    {
      type: 'npm',
      name: /^@launchdarkly\//,
      example: '@launchdarkly/cloudflare-server-sdk',
    },
    {
      type: 'golang',
      name: /github.com\/launchdarkly\//,
      example: 'github.com/launchdarkly/go-sdk-common/v3',
    },
    { type: 'ruby', name: 'launchdarkly-server-sdk' },
    { type: 'ruby', name: 'ldclient-rb' },
    { type: 'rust', name: 'launchdarkly-server-sdk' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/launchdarkly/launchdarkly',
    },
    { type: 'php', name: 'launchdarkly/server-sdk' },
    { type: 'php', name: 'launchdarkly/launchdarkly-php' },
    { type: 'githubAction', name: 'launchdarkly/find-code-references' },
  ],
});
