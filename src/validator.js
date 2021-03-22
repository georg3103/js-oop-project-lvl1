import StringSchema from './types/string';
import NumberSchema from './types/number';
import ArraySchema from './types/array';

export const createSting = StringSchema.create;
export const createNumber = NumberSchema.create;
export const createArray = ArraySchema.create;

const types = {
  createSting,
  createNumber,
  createArray,
};

export default class Validator {
  constructor() {
    this.types = types;
  }

  string() {
    return this.types.createSting();
  }

  number() {
    return this.types.createNumber();
  }

  array() {
    return this.types.createArray();
  }
}
