import StringSchema from './types/string';
import NumberSchema from './types/number';

const createSting = StringSchema.create;
const createNumber = NumberSchema.create;

const types = {
  createSting,
  createNumber,
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
}
