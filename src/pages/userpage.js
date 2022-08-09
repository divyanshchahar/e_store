// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";
import LoginPage from "../pages/loginPage";
import UserSelectionPage from "../pages/userSelectionPage";
// import UserEdit from "./userEdit";

const UserPage = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};
  let toRender = "";

  if (userCount === 0) {
    toRender = "loginPage";
  } else {
    toRender = "userSelection";
  }

  return (
    <>
      {typeof userCount === "undefined" && <h1>Loading...</h1>}
      {/* {toRender === "editPage" && <UserEdit />}/ */}
      {toRender === "loginPage" && <LoginPage />}
      {toRender === "userSelection" && <UserSelectionPage />}
    </>
  );
};

export default UserPage;
