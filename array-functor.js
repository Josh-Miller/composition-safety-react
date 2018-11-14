const upper = text => text.toUpperCase();

const exclaim = text => text.concat('!');

['hello', 'world']
  .map(upper)
  .map(exclaim);
