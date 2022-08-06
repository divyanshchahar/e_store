// IMPORTING COMPONENETS
import useAPIData from "./useAPIData";

function UserSelectionPage() {
  const users = useAPIData("http://localhost:3001/users");
  const [appData] = useAPIData("http://localhost:3001/appdata");

  function deleteUser(id) {
    const url = "http://localhost:3001/users/";
    const deleteUrl = url.concat(id);

    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    const { userCount } = appData;
    const updatedData = { ...appData, userCount: userCount - 1 };

    fetch("http://localhost:3001/appdata/appdataid", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));
  }

  function selectUser(id) {
    const { currentUser } = appData;
    const updatedData = { ...appData, currentUser: id };

    fetch("http://localhost:3001/appdata/appdataid", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>select User</h1>
      {users.map((item) => {
        const {
          id,
          personelinfo: { name, email },
        } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={() => selectUser(id)}>Select User</button>
            <button onClick={() => deleteUser(id)}>Delete User</button>
          </div>
        );
      })}
    </>
  );
}

export default UserSelectionPage;
