import fs from 'node:fs/promises';

import { registeredRules } from '../register.js';
import '../rules/index.js';

(async () => {
  const list: string[] = registeredRules
    .sort((a, b) => (a.tech > b.tech ? 1 : -1))
    .map(({ tech, name, type }) => {
      return `{ key: '${tech}', name: '${name}', type: '${type}' }`;
    });

  await fs.writeFile(
    './src/common/techs.generated.ts',
    `import type { AllowedKeys, TechItem } from '../types/techs.js';

export const listTech: TechItem[] = [
  ${list.join(',\n  ')},
];

export const listIndexed: Record<AllowedKeys, TechItem> = {} as any;
Object.values(listTech).forEach((v) => {
  listIndexed[v.key] = v;
});
`
  );
})();
