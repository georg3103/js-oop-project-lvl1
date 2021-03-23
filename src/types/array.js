import Schema from './schema';

export const arrayValidators = {
  sizeof: (size) => (data) => data.length === size,
  required: () => (data) => Array.isArray(data),
};

export default class ArraySchema extends Schema {
  sizeof(size) {
    this.checks.push(this.validators.sizeof(size));
    return this;
  }
}
