// IMPORTING COMPONENTS
import useAPIData from "../services/utils/useAPIData";
import CartItems from "../layouts/cartitems";

const Cart = () => {
  const [appData] = useAPIData("http://localhost:3001/appdata");
  const id = typeof appData === "undefined" ? null : appData.currentUser;
  const cartData = useAPIData(`http://localhost:3001/cart/${id}`);
  return (
    <>
      {cartData.length === 0 ? (
        <h1>No items in Cart</h1>
      ) : (
        <CartItems cartData={cartData} />
      )}
    </>
  );
};

export default Cart;
