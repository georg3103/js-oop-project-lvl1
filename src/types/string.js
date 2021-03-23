import Schema from './schema';

export const stringValidators = {
  minLength: (length) => (data) => data.length >= length,
  contains: (str) => (data) => data.includes(str),
  required: () => (data) => !!data.length,
};

export default class StringSchema extends Schema {
  minLength(length) {
    this.checks.push(this.validators.minLength(length));
    return this;
  }

  contains(str) {
    this.checks.push(this.validators.contains(str));
    return this;
  }
}
