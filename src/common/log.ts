import { consola } from 'consola';

import type { LogLevel } from 'consola';

export const l = consola.create({
  level: (process.env.LOG_LEVEL || process.env.CONSOLA_LEVEL || 'info') as unknown as LogLevel,
});
