//IMPORT REACT FUNCTIONALITY
import { useEffect } from "react";
import { useState } from "react";

// IMPORTING COMPONENTS
import CartItems from "../layouts/cartitems";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/appdata")
      .then((response) => response.json())
      .then(([userId]) => {
        fetch(`http://localhost:3001/cart/${userId.currentUser}`)
          .then((response) => response.json())
          .then((actualData) => {
            setCartData(actualData.cartItems);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {cartData.length === 0 ? (
        <h1>This user has no itms in cart</h1>
      ) : (
        <CartItems cartData={cartData} />
      )}
    </>
  );
};

export default Cart;
