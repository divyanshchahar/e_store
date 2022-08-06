// IMPORTING COMPONENETS
import useAPIData from "./useAPIData";
import LoginPage from "./loginPage";
import UserSelectionPage from "./userSelectionPage";
import UserEdit from "./userEdit";

const UserHandler = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};
  let toRender = "";

  if (currentUSer !== null) {
    toRender = "editPage";
    console.log("I am here");
  } else {
    if (userCount === 0) {
      toRender = "loginPage";
    }
    if (userCount > 0) {
      toRender = "userSelection";
    }
  }

  return (
    <>
      {typeof userCount === "undefined" && <h1>Loading...</h1>}
      {toRender === "editPage" && <UserEdit />}
      {toRender === "loginPage" && <LoginPage />}
      {toRender === "userSelection" && <UserSelectionPage />}
    </>
  );
};

export default UserHandler;
