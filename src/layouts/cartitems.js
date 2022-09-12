// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";
import createCartData from "../services/utils/createCartData";
import SingleImageLoader from "../services/utils/singleimageloader";
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
        <div>
          {cartDisplay.map((item) => {
            total = total + item.price * item.qty;
            return (
              <div key={item.id}>
                <SingleImageLoader productId={item.id} />
                <p>{item.name}</p>
                <p>{`$ ${item.price}`}</p>
                <button onClick={() => addToCart(item.id)}>+</button>
                <p>{item.qty}</p>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </div>
            );
          })}
          <p>Total: {total}</p>
          <button onClick={() => checkout()}>Buy Items</button>
        </div>
      )}
    </>
  );
}

export default CartItems;
