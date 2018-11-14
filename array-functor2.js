const upper = text => text.toUpperCase();

const exclaim = text => text.concat('!');

const compose = f => g => x => f(g(x));

['hello', 'world']
  .map(compose(upper)(exclaim));
