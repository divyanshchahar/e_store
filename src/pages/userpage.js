//IMPORTING FUNCTIONALITY
import { useNavigate } from "react-router-dom";

// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";
import LoginPage from "../pages/loginPage";
import UserSelectionPage from "../pages/userSelectionPage";

const UserPage = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};
  const navigate = useNavigate();
  let toRender = "";

  if (typeof userCount === "undefined") {
    return (
      <h1>
        <h1>Loading</h1>
      </h1>
    );
  }
  if (userCount === 0) {
    navigate("/registeruser");
  }
  if (userCount > 0) {
    navigate("/selectuser");
  }
  // if (userCount === 0) {
  //   toRender = "loginPage";
  // } else {
  //   toRender = "userSelection";
  // }

  // return (
  //   <>
  //     {typeof userCount === "undefined" && <h1>Loading...</h1>}
  //     {/* {toRender === "editPage" && <UserEdit />}/ */}
  //     {toRender === "loginPage" && <LoginPage />}
  //     {toRender === "userSelection" && <UserSelectionPage />}
  //   </>
  // );
};

export default UserPage;
