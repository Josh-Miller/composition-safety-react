import Maybe from 'data.maybe';

const prop = property => obj =>
  obj && property in obj
    ? Maybe.of(obj[property])
    : Maybe.Nothing();

const greeting = user =>
  prop('name')(user)
    .map(name => `Hello ${name}`);
