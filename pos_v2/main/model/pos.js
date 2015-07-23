function Pos(scanner, cart) {
  this.scanner = scanner;
  this.cart = cart;
}

Pos.prototype.scan = function(tag) {
  var cartItem = this.scanner.scan(tag);
  if (cartItem) {
    this.cart.addCartItem(cartItem);
  }
};
