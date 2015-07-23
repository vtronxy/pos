function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(cartItem) {
  var existedCartItem = this.findCartItem(cartItem.getBarcode());
  if (existedCartItem) {
    existedCartItem.count += cartItem.count;
  } else {
    this.cartItems.add(cartItem);
  }
};

Cart.prototype.findCartItem = function(barcode) {
  for (var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].getBarcode() === barcode) {
      return this.cartItems[i];
    }
  }
};
