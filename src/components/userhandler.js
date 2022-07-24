// IMPORTING ASSETS
import useAPIData from "./useAPIData";
import LoginPage from "./loginPage";

const UserHandler = () => {
  const [appState] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUSer } = appState || {};
  return (
    <>
      {typeof userCount === "undefined" && <h1>Loading...</h1>}
      {userCount === 0 && <LoginPage />}
    </>
  );
};

export default UserHandler;
