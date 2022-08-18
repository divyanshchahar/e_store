//IMPORTING FUNCTIONALITY
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import useAPIData from "../services/utils/useAPIData";

function UserHistoryPage() {
  const { id } = useParams();
  const userUrl = "http://localhost:3001/users/";
  const completeURl = userUrl.concat(id);
  const userData = useAPIData(completeURl);

  return <h1>This is user history page</h1>;
}

export default UserHistoryPage;
