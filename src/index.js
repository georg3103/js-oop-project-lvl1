import capitalize from './utils/capitalize';

import StringSchema from './types/string';
import NumberSchema from './types/number';
import ArraySchema from './types/array';
import ObjectSchema from './types/object';

import { schemaValidators } from './types/schema';

const stringValidators = {
  minLength: (length) => (data) => data.length >= length,
  contains: (str) => (data) => data.includes(str),
  required: () => (data) => !!data.length,
};

const numberValidators = {
  min: (num) => (data) => data > num,
  max: (num) => (data) => data < num,
  range: (minNum, maxNum) => (data) => numberValidators.min(minNum)(data)
    && numberValidators.max(maxNum)(data),
  positive: () => (data) => data > 0,
  required: (type) => (data) => schemaValidators.checkType(type)(data),
};

const arrayValidators = {
  sizeof: (size) => (data) => data.length === size,
  required: () => (data) => Array.isArray(data),
};

const objectValidators = {
  shape: (shapeObj) => (data) => Object.entries(shapeObj).every(([key, schema]) => {
    const dataValue = data[key];
    return schema.isValid(dataValue);
  }),
};

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

  addMethod(type, name) {
    function newMethod(...args) {
      this.checks.push(this.validators[name](...args));
      return this;
    }
    this.types[capitalize(type)].prototype[name] = newMethod;
  }

  addValidator(type, name, fn) {
    if (this.validators[type][name]) {
      throw new Error(`Validator of name ${name} already exists`);
    }

    const newValidator = (value) => (data) => fn(data, value);
    this.validators[type][name] = newValidator;
    this.addMethod(type, name);
    return true;
  }
}
