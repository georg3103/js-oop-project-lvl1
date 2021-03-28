import capitalize from './utils/capitalize';

import StringSchema, { stringValidators } from './types/string';
import NumberSchema, { numberValidators } from './types/number';
import ArraySchema, { arrayValidators } from './types/array';
import ObjectSchema, { objectValidators } from './types/object';

export default class Validator {
  constructor() {
    this.types = {
      String: StringSchema,
      Number: NumberSchema,
      Array: ArraySchema,
      Object: ObjectSchema,
    };
    this.validators = {
      string: stringValidators,
      number: numberValidators,
      array: arrayValidators,
      object: objectValidators,
    };
  }

  string() {
    return new this.types.String({ type: 'string', validators: this.validators.string });
  }

  number() {
    return new this.types.Number({ type: 'number', validators: this.validators.number });
  }

  array() {
    return new this.types.Array({ type: 'array', validators: this.validators.array });
  }

  object() {
    return new this.types.Object({ type: 'object', validators: this.validators.object });
  }

  #addMethod(type, name) {
    function newMethod(...args) {
      this.checks.push(this.validators[name](...args));
      return this;
    }
    this.types[capitalize(type)].prototype[name] = newMethod;
  }

  addValidator(type, name, fn) {
    const newValidator = (value) => (data) => fn(data, value);
    this.validators[type][name] = newValidator;
    this.#addMethod(type, name);
    return true;
  }
}
