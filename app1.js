import Maybe from 'data.maybe';

const firstName = Maybe.of('Josh');
const lastName = Maybe.of('Miller');

const name = firstName => lastName => `${firstName} ${lastName}`;
// How do we concat our 2 strings?
