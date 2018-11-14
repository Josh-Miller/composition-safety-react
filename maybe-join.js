const Maybe.prototype.join = function() {
  return this.isEmpty() ? Maybe.of(null) : this.value;
}

const hellow = Maybe.of(Maybe.of('Hellow World'));
hellow.join();

// Maybe('Hellow World');
