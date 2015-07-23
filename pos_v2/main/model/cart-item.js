function CartItem(item, count) {
  this.item = item;
  this.count = count;
}

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};
