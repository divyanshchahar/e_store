//IMPORTING FUNCTIONALITY
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import useAPIData from "../services/utils/useAPIData";
import UserDetails from "../layouts/userdetail";

function UserHistoryPage() {
  const { id } = useParams();
  const userUrl = "http://localhost:3001/users/";
  const userFinalUrl = userUrl.concat(id);
  const userData = useAPIData(userFinalUrl);

  return (
    <>
      {userData.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <UserDetails userData={userData} />
      )}
      {}
    </>
  );
}

export default UserHistoryPage;
