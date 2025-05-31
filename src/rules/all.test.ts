import { describe, expect, it } from 'vitest';

import { registeredTech } from '../register.js';
import '../autoload.js';

describe('all', () => {
  it('should match everything', () => {
    expect([...registeredTech.values()].sort()).toMatchSnapshot();
  });
});
