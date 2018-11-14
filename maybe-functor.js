const Maybe = function(a) {
  this.value = a;
}
Maybe.of = x => new Maybe(x);

Maybe.prototype.isEmpty = function() {
  return (
    this.value === null
    || this.value === undefined
  );
}

Maybe.prototype.map = function(f) {
  return this.isEmpty()
    ? Maybe.of(null)
    : Maybe.of(f(this.value));
}
