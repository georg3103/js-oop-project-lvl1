import StringSchema, { stringValidators } from './types/string';
import NumberSchema, { numberValidators } from './types/number';
import ArraySchema, { arrayValidators } from './types/array';

export default class Validator {
  constructor() {
    this.types = {
      String: StringSchema,
      Number: NumberSchema,
      Array: ArraySchema,
    };
  }

  string() {
    return new this.types.String({ type: 'string', validators: stringValidators });
  }

  number() {
    return new this.types.Number({ type: 'number', validators: numberValidators });
  }

  array() {
    return new this.types.Array({ type: 'array', validators: arrayValidators });
  }
}
