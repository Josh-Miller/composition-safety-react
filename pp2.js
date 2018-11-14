import Maybe from 'data.maybe';

const firstName = Maybe.of('Josh');
const lastName = Maybe.of('Miller');

const name = firstName => lastName => `${firstName} ${lastName}`;

Maybe.of(name)
  .ap(firstName)
  .ap(lastName);

// Maybe.of('Josh Miller');
