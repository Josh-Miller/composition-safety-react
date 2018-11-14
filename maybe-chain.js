Maybe.prototype.chain = function(f){
  return this.map(f).join();
};
