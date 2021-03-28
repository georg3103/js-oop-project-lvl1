import StringSchema, { stringValidators } from './types/string';
import NumberSchema, { numberValidators } from './types/number';
import ArraySchema, { arrayValidators } from './types/array';

export default class Validator {
  constructor() {
    this.types = {
      string: StringSchema,
      number: NumberSchema,
      array: ArraySchema,
    };
    this.validators = {
      string: stringValidators,
      number: numberValidators,
      array: arrayValidators,
    }
  }

  string() {
    return new this.types.string({ type: 'string', validators: this.validators.string });
  }

  number() {
    return new this.types.number({ type: 'number', validators: this.validators.number });
  }

  array() {
    return new this.types.array({ type: 'array', validators: this.validators.array });
  }

  #addMethod(type, name) {
    function newMethod (...args) {
      this.checks.push(this.validators[name](...args))
      return this;
    }
    this.types[type].prototype[name] = newMethod;
  }

  addValidator(type, name, fn) {
    const newValidator = (value) => (data) => fn(data, value);
    this.validators[type][name] = newValidator;
    this.#addMethod(type, name);
    return true;
  }
}
