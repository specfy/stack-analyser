import { rulesDotEnv } from '../../../loader.js';
import { Payload } from '../../../payload/index.js';

import type { BaseProvider, ProviderFile } from '../../../provider/base.js';

const DOTENV = '.env.example';

export const detectInDotEnv = async (
  files: ProviderFile[],
  provider: BaseProvider
): Promise<false | Payload> => {
  for (const file of files) {
    if (file.name !== DOTENV) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    const pl = new Payload({ name: 'virtual', folderPath: file.fp });

    for (const rule of rulesDotEnv) {
      const matched = rule(content);
      if (matched !== false) {
        pl.addTech(matched[0].tech, [`${matched[0].tech} matched env: ${matched[1]}`]);
      }
    }

    return pl;
  }

  return false;
};
