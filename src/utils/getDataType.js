const typesMapper = {
  string: (data) => typeof data === 'string',
  number: (data) => typeof data === 'number',
  array: (data) => Array.isArray(data),
};

export default (type, data) => typesMapper[type](data);
