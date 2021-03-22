import Schema from './schema';

const validations = {
  sizeof: (size) => (data) => data.length === size,
  required: () => (data) => Array.isArray(data),
};

export default class ArraySchema extends Schema {
  constructor() {
    super({ type: 'array' });
  }

  required() {
    this.checks.push(validations.required());
    return this;
  }

  sizeof(size) {
    this.checks.push(validations.sizeof(size));
    return this;
  }

  static create = () => new ArraySchema();
}
