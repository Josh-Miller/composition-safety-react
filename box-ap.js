// Box (a -> b) -> Box a -> Box b
Box.prototype.ap = function (b) {
  return new Box(b.value(this.value))
}
