function createCartData(cartData, products) {
  // array of product ids in cart
  const temp1 = cartData.cartData.cartItems.map((item) => {
    return item.pid;
  });

  // products filtered by ids of items in the cart
  const temp2 = products.filter((item) => {
    return temp1.includes(item.id);
  });

  var cartDisplay = []; // array to hold final cart data

  temp2.map((itemA) => {
    cartData.cartData.cartItems.map((itemB) => {
      if (itemA.id === itemB.pid) {
        cartDisplay.push({ ...itemA, qty: itemB.qty });
      }
    });
  });

  return cartDisplay;
}

export default createCartData;
