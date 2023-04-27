import { customAlphabet } from 'nanoid/non-secure';

export const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const minSize = 10;
export const maxSize = 12;
export const nid = customAlphabet(alphabet, maxSize);
