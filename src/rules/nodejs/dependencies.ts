import type { FullVersion } from 'package-json';

import { listIndexed } from '../../common/techs';
import type { Service } from '../../types';
import type { TechItem } from '../../types/techs';

const DEPS: Record<string, TechItem[]> = {
  algoliasearch: [listIndexed.algolia],
  angular: [listIndexed.angular],
  amqplib: [listIndexed.rabbitmq],
  bootstrap: [listIndexed.bootstrap],
  eslint: [listIndexed.eslint],
  express: [listIndexed.express],
  fastify: [listIndexed.fastify],
  jest: [listIndexed.jest],
  '@algolia/autocomplete-js': [listIndexed.algolia],
  mongoose: [listIndexed.mongodb],
  mysql: [listIndexed.mysql],
  'node-mailjet': [listIndexed.mailjet],
  pg: [listIndexed.postgresql],
  prettier: [listIndexed.prettier],
  prisma: [listIndexed.prisma],
  react: [listIndexed.react],
  redis: [listIndexed.redis],
  sequelize: [listIndexed.sequelize],
  sqreen: [listIndexed.sqreen],
  tailwind: [listIndexed.tailwind],
  typescript: [listIndexed.typescript],
  vue: [listIndexed.vue],
  vite: [listIndexed.vite],
};

export function detectDependencies(pkg: FullVersion): Service['tech'] {
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

  const matched: Service['tech'] = new Set();
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
