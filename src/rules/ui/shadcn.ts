import { Payload } from '../../index.js';
import { register } from '../../register.js';

import type { ComponentMatcher } from '../../index.js';

/**
 * No other way to detect Shadcn than checking the components.json file.
 * It's really unfortunate, and we will try no to have to do this for other techs.
 */
const detectShadcn: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (file.name !== 'components.json') {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(content) as Record<string, unknown>;
    } catch {
      continue;
    }

    if (!('$schema' in parsed)) {
      continue;
    }

    if (parsed.$schema !== 'https://ui.shadcn.com/schema.json') {
      continue;
    }

    const pl = new Payload({ name: 'virtual', folderPath: file.fp });
    pl.addTech('shadcn', ['components.json']);
    return pl;
  }

  return false;
};

register({
  tech: 'shadcn',
  name: 'Shadcn',
  type: 'ui',
  detect: detectShadcn,
  dependencies: [
    { type: 'npm', name: 'shadcn-ui' },
    { type: 'npm', name: '@shadcn/ui' },
    { type: 'npm', name: 'shadcn' },
    { type: 'npm', name: 'shadcn-nuxt' },
    { type: 'npm', name: 'shadcn-svelte' },
  ],
});
