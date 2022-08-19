//IMPORTING FUNCTIONALITY
import SingleImageLoader from "../services/utils/singleimageloader";
import { Link } from "react-router-dom";

// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";
import createCartData from "../services/utils/createCartData";

function CartItems(cartData) {
  const products = useAPIData("http://localhost:3001/product_data");

  // const cartPid = cartData.cartData.cartItems.map((item) => {
  //   return item.pid;
  // });

  // const filtered = products.filter((item) => {
  //   return cartPid.includes(item.id);
  // });

  const cartDisplay = createCartData(cartData, products);

  return (
    <>
      {cartDisplay.length === 0 ? (
        <h1>Loading cart items</h1>
      ) : (
        <div>
          {cartDisplay.map((item) => {
            return (
              <div key={item.id}>
                <SingleImageLoader productId={item.id} />
                <p>{item.name}</p>
                <p>{`$ ${item.price}`}</p>
                <button>+</button>
                <p>{item.qty}</p>
                <button>-</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CartItems;
