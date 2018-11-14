// Regular
const prop = (property, obj) =>
  obj && property in obj
    ? maybe.of(obj[property])
    : maybe.nothing();

prop('name', user);

// Curried
const prop = property => obj =>
  obj && property in obj
    ? maybe.of(obj[property])
    : maybe.nothing();

prop('name')(user);
