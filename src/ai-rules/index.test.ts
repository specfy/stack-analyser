import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { generateAIRuleContent } from './index.js';
import { analyser } from '../analyser/index.js';
import { flatten } from '../payload/helpers.js';
import { FSProvider } from '../provider/fs.js';
import '../autoload.js';

describe('generateAIRuleContent', () => {
  it('should generate content from payload with technologies', async () => {
    const root = path.join(import.meta.dirname, '../../tests/__fixtures__/pkgs');
    const res = await analyser({
      provider: new FSProvider({
        path: root,
      }),
    });

    const flat = flatten(res, { merge: true });

    const content = generateAIRuleContent(flat);

    expect(content).toMatchSnapshot();
  });
});
