const Box = function(a) {
  this.value = a;
}

Box.of = x => new Box(x);

// (a -> b) -> Box a -> Box b
Box.prototype.map = function(f) {
  return Box.of(f(this.value));
}
