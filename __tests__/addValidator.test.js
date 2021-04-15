import {
  test, expect, describe, beforeEach,
} from '@jest/globals';

import Validator from '../src/index';

describe('addValidator', () => {
  let v;

  beforeEach(() => {
    v = new Validator();
  });

  test('string (startsWith)', () => {
    const fn = (value, start) => value.startsWith(start);

    v.addValidator('string', 'startWith', fn);

    const schema = v.string().startWith('H');

    expect(schema.isValid('exlet')).toBe(false);
    expect(schema.isValid('Hexlet')).toBe(true);
  });

  test('number (min)', () => {
    const fn = (value, min) => value >= min;
    expect(() => v.addValidator('number', 'min', fn))
      .toThrow('Validator of name min already exists');
  });
});
