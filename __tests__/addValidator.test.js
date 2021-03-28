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
    v.addValidator('number', 'min', fn);

    const schema = v.number().min(5);

    expect(schema.isValid(4)).toBe(false);
    expect(schema.isValid(5)).toBe(true);
  });
});
