export default class NumberSchema {
  constructor({ validation }) {
    this.type = 'number';
    this.validation = validation;
  }

  static create = () => new NumberSchema({
    validation: {},
  });
}
