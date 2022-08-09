// IMPORTING COMPONENETS
import useAPIData from "./useAPIData";
import LoginPage from "./loginPage";
import UserSelectionPage from "./userSelectionPage";
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
