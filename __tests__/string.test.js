import {
  test, expect, describe,
} from '@jest/globals';

import Validator from '../src/validator';

describe('string functionality', () => {
  const v = new Validator();

  const schema = v.string();

  test('isValid', () => {
    expect(schema.isValid('')).toBe(true);
  });

  test('required', () => {
    expect(schema.required().isValid('')).toBe(false);
  });

  test('contains', () => {
    expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  });

  test('minLength', () => {
    expect(schema.minLength(10).isValid('ten')).toBe(false);
  });

  test('combination of methods', () => {
    expect(schema.required().contains('what').minLength(10).isValid('what does the fox say')).toBe(true);
  });
});
