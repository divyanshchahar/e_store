//IMPORTING FUNCTIONALITY
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import useAPIData from "../services/utils/useAPIData";
import UserDetails from "../layouts/userdetail";
import CartItems from "../layouts/cartitems";
import HistoryItems from "../layouts/historyItems";

function UserHistoryPage() {
  const { id } = useParams();
  const userUrl = "http://localhost:3001/users/";
  const userFinalUrl = userUrl.concat(id);

  const cartUrl = "http://localhost:3001/cart/";
  const finalCartURl = cartUrl.concat(id);

  const historyUrl = "http://localhost:3001/shoppingHistory/";
  const finalhistoryUrl = historyUrl.concat(id);

  const userData = useAPIData(userFinalUrl);
  const cartData = useAPIData(finalCartURl);

  return (
    <>
      {userData.length === 0 ? (
        <h1>Fetching user details ...</h1>
      ) : (
        <UserDetails userData={userData} />
      )}
      {cartData.length === 0 ? (
        <h1>Fetching cart ...</h1>
      ) : (
        <CartItems cartData={cartData} />
      )}
    </>
  );
}

export default UserHistoryPage;
