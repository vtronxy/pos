function Receipt() {
  this.receiptItems = [];
  this.totalDiscount = 0;
}

Receipt.prototype.getOriginTotalAmount = function() {
  return this.receiptItems
    .map(function(receiptItem) {
      return receiptItem.getOriginSubTotal();
    })
    .reduce(function(a, b) {
      return a + b;
    });
};

Receipt.prototype.getActualTotalAmount = function() {
  var actualTotalAmount = this.receiptItems
    .map(function(receiptItem) {
      return receiptItem.getActualSubTotal();
    })
    .reduce(function(a, b) {
      return a + b;
    });

  return actualTotalAmount - this.totalDiscount;
};
