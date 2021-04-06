const getOrderTotal = (order) => {
  let total = 0;
  for (const item of order) {
    total += item.price + item.shipping;
  }
  return total;
};

module.exports = getOrderTotal;
