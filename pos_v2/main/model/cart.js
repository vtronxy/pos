function Cart() {
  this.cartItems = [];
}

Cart.prototype.findCartItem = function(barcode) {
  for (var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].getBarcode() === barcode) {
      return this.cartItems[i];
    }
  }
};
