// IMPORTING COMPONENETS
import useAPIData from "./useAPIData";

function UserSelectionPage() {
  const users = useAPIData("http://localhost:3001/users");
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
          </div>
        );
      })}
    </>
  );
}

export default UserSelectionPage;
