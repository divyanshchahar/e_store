//IMPORTING FUNCTIONALITY
import { useNavigate } from "react-router-dom";

// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";

const UserPage = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};
  const navigate = useNavigate();
  let toRender = "";

  if (typeof userCount === "undefined") {
    return <h1>Loading</h1>;
  }
  if (userCount === 0) {
    navigate("/registeruser");
  }
  if (userCount > 0) {
    navigate("/selectuser");
  }
};

export default UserPage;
