import type { FullVersion } from 'package-json';

import { listIndexed } from '../../common/techs';
import type { AllowedKeys, TechItem } from '../../types/techs';

const DEPS: Record<string, TechItem[]> = {
  '@algolia/autocomplete-js': [listIndexed.algolia],
  '@datadog/browser-logs': [listIndexed.datadog],
  '@datadog/browser-rum': [listIndexed.datadog],
  '@datadog/cli': [listIndexed.datadog],
  '@elastic/elasticsearch': [listIndexed.elasticsearch],
  '@hotjar/browser': [listIndexed.hotjar],
  '@sentry/browser': [listIndexed.sentry],
  '@sentry/tracing': [listIndexed.sentry],
  '@sentry/node': [listIndexed.sentry],
  '@sentry/react': [listIndexed.sentry],
  'dd-trace': [listIndexed.datadog],
  'node-mailjet': [listIndexed.mailjet],
  algoliasearch: [listIndexed.algolia],
  amqplib: [listIndexed.rabbitmq],
  angular: [listIndexed.angular],
  bootstrap: [listIndexed.bootstrap],
  eslint: [listIndexed.eslint],
  express: [listIndexed.express],
  fastify: [listIndexed.fastify],
  jest: [listIndexed.jest],
  'jest-cli': [listIndexed.jest],
  'babel-jest': [listIndexed.jest],
  koa: [listIndexed.koa],
  logrocket: [listIndexed.logrocket],
  mongoose: [listIndexed.mongodb],
  mysql: [listIndexed.mysql],
  newrelic: [listIndexed.newrelic],
  pg: [listIndexed.postgresql],
  prettier: [listIndexed.prettier],
  prisma: [listIndexed.prisma],
  react: [listIndexed.react],
  redis: [listIndexed.redis],
  sequelize: [listIndexed.sequelize],
  'socket.io': [listIndexed.socketio],
  sqreen: [listIndexed.sqreen],
  tailwind: [listIndexed.tailwind],
  typescript: [listIndexed.typescript],
  vite: [listIndexed.vite],
  vue: [listIndexed.vue],
};

export function detectDependencies(pkg: FullVersion): Set<AllowedKeys> {
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

  const matched = new Set<AllowedKeys>();
  for (const dep of Object.keys(deps)) {
    if (!(dep in DEPS)) {
      continue;
    }

    for (const ref of DEPS[dep]) {
      matched.add(ref.key);
    }
  }

  return matched;
}
