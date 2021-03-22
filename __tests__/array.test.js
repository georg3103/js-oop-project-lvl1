import {
  test, expect, describe, beforeEach
} from '@jest/globals';

import Validator from '../src/validator';

describe('array functionality', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.array();
  });

  test('isValid', () => {
    expect(schema.isValid([])).toBe(true);
  });

  test('required', () => {
    expect(schema.required().isValid([])).toBe(true);
    expect(schema.required().isValid([1, 2])).toBe(true);
    expect(schema.required().isValid({})).toBe(false);
  });

  test('sizeof', () => {
    expect(schema.sizeof(3).isValid([1, 2, 3])).toBe(true);
    expect(schema.sizeof(3).isValid([1, 2])).toBe(false);
  });

  test('combination of methods', () => {
    expect(schema.required().sizeof(2).isValid([1, 2])).toBe(true);
  });
});
