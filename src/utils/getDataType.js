const typesMapper = {
  string: 'string',
  number: 'number',
};

export default (data) => {
  const type = typeof data;
  return typesMapper[type];
};
