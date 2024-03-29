//IMPORTING FUNCTIONALITY
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import useAPIData from "../utils/useAPIData";
import UserDetails from "../layouts/userdetail";
import CartItems from "../layouts/cartitems";
import HistoryItems from "../layouts/historyItems";

function UserHistoryPage() {
  const { id } = useParams();

  const userFinalUrl = `http://localhost:3001/users/${id}`;

  const finalCartURl = `http://localhost:3001/cart/${id}`;

  const finalhistoryUrl = `http://localhost:3001/shoppingHistory/${id}`;

  const userData = useAPIData(userFinalUrl);
  const cartData = useAPIData(finalCartURl);
  const historyData = useAPIData(finalhistoryUrl);

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
      {historyData.length === 0 ? (
        <h1>Fetching shopping history ...</h1>
      ) : (
        <HistoryItems historyData={historyData} />
      )}
    </>
  );
}

export default UserHistoryPage;
