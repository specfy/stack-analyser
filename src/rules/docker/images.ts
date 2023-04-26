import { listIndexed } from '../../common/techs';
import type { AllowedKeys, TechItem } from '../../types/techs';

const DEPS: Array<{ regexp: RegExp; tech: TechItem }> = [
  { regexp: /caddy/, tech: listIndexed.caddy },
  { regexp: /cassandra/, tech: listIndexed.cassandra },
  { regexp: /couchbase/, tech: listIndexed.couchbase },
  { regexp: /elasticsearch/, tech: listIndexed.elasticsearch },
  { regexp: /httpd/, tech: listIndexed.httpd },
  { regexp: /influxdb/, tech: listIndexed.influxdb },
  { regexp: /mariadb/, tech: listIndexed.mariadb },
  { regexp: /memcached/, tech: listIndexed.memcached },
  { regexp: /mongo/, tech: listIndexed.mongodb },
  { regexp: /mysql/, tech: listIndexed.mysql },
  { regexp: /neo4j/, tech: listIndexed.neo4j },
  { regexp: /nginx/, tech: listIndexed.nginx },
  { regexp: /percona/, tech: listIndexed.percona },
  { regexp: /postgres/, tech: listIndexed.postgresql },
  { regexp: /rabbitmq/, tech: listIndexed.rabbitmq },
  { regexp: /redis/, tech: listIndexed.redis },
  { regexp: /vault/, tech: listIndexed.vault },
  { regexp: /zookeeper/, tech: listIndexed.zookeeper },
];

export function detectImages(image: string): AllowedKeys | null {
  for (const dep of DEPS) {
    if (dep.regexp.test(image)) {
      return dep.tech.key;
    }
  }

  return null;
}
