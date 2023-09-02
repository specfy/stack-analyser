import { describe, expect, it } from 'vitest';

import { registeredTech } from '../register.js';

import '../autoload.js';

describe('all', () => {
  it('should match everything', async () => {
    expect(Array.from(registeredTech.values()).sort()).toMatchSnapshot();
  });
});
