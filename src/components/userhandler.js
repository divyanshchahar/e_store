// IMPORTING ASSETS
import useAPIData from "./useAPIData";
import LoginPage from "./loginPage";
import UserSelectionPage from "./userSelectionPage";

const UserHandler = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};

  console.log(userCount);

  return (
    <>
      {typeof userCount === "undefined" && <h1>Loading...</h1>}
      {userCount > 0 && <UserSelectionPage />}
      {userCount === 0 && <LoginPage />}
    </>
  );
};

export default UserHandler;
