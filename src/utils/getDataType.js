const isObject = (data) => Object.prototype.toString.call(data) === '[object Object]';

const typesMapper = {
  string: (data) => typeof data === 'string',
  number: (data) => typeof data === 'number',
  array: (data) => Array.isArray(data),
  object: (data) => isObject(data),
};

export default (type, data) => typesMapper[type](data);
