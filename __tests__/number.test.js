import {
  test, expect, describe, beforeEach,
} from '@jest/globals';

import Validator from '../src/index';

describe('number functionality', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.number();
  });

  test('isValid', () => {
    expect(schema.isValid(2)).toBe(true);
  });

  test('required', () => {
    expect(schema.required().isValid('')).toBe(false);
  });

  test('positive', () => {
    expect(schema.positive().isValid(1)).toBe(true);
    expect(schema.positive().isValid(-1)).toBe(false);
  });

  test('range', () => {
    expect(schema.range(10, 20).isValid(14)).toBe(true);
    expect(schema.range(10, 20).isValid(24)).toBe(false);
  });

  test('combination of methods', () => {
    expect(schema.required().positive().range(10, 20).isValid(14)).toBe(true);
  });
});
