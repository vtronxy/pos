function Scanner() {
}

Scanner.prototype.scan = function(tag) {

  var tagArray = tag.split('-');
  var barcode = tagArray[0];
  var count = tagArray[1] ? parseFloat(tagArray[1]) : 1;

  var item = Item.find(barcode);

  var cartItem;

  if (item) {
    cartItem = new CartItem(item, count);
  }

  return cartItem;
};
