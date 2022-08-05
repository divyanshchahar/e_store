// IMPORTING COMPONENETS
import useAPIData from "./useAPIData";

function UserSelectionPage() {
  const users = useAPIData("http://localhost:3001/users");
  const appData = useAPIData("http://localhost:3001/appdata");

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
            <button>Select User</button>
            <button onClick={() => deleteUser(id)}>Delete User</button>
          </div>
        );
      })}
    </>
  );
}

export default UserSelectionPage;
