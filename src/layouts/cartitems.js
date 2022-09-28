// IMPORTING COMPONENETS
import useAPIData from "../utils/useAPIData";
import createCartData from "../utils/createCartData";
import SingleImageLoader from "../utils/singleimageloader";
import addToCart from "../middleware/addtocart";
import removeFromCart from "../middleware/removeFromCart";
import checkout from "../middleware/checkout";

function CartItems(cartData) {
  const products = useAPIData("http://localhost:3001/product_data");
  const cartDisplay = createCartData(cartData, products);
  const showCartData = cartData.length * cartDisplay.length;
  var total = 0;
  return (
    <>
      {showCartData.length === 0 ? (
        <h1>Loading cart items</h1>
      ) : (
        <div className="cartpage">
          <h1>Cart</h1>
          {cartDisplay.map((item) => {
            total = total + item.price * item.qty;
            return (
              <div key={item.id} className="cartitem">
                <SingleImageLoader productId={item.id} />
                <div className="detailcontainer">
                  <h1>{item.name}</h1>
                  <p>{`$ ${item.price}`}</p>
                  <div className="qty">
                    <button onClick={() => addToCart(item.id)}>+</button>
                    <p>{item.qty}</p>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                  </div>
                </div>
              </div>
            );
          })}
          <p className="total">Total: {total}</p>
          <button className="buynowbutton" onClick={() => checkout()}>
            Buy Items
          </button>
        </div>
      )}
    </>
  );
}

export default CartItems;
