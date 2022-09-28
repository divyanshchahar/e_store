//IMPORTING FUNCTIONALITY
import { useNavigate, Link } from "react-router-dom";

// IMPORTING COMPONENETS
import useAPIData from "../utils/useAPIData";

function UserSelectionPage() {
  const navigate = useNavigate();
  const users = useAPIData("http://localhost:3001/users");
  const [appData] = useAPIData("http://localhost:3001/appdata");
  const { userCount, currentUser } = appData || {};

  if (userCount === 0) {
    navigate("/registeruser");
  }

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

    if (currentUser === id) {
      const updatedData = {
        ...appData,
        userCount: userCount - 1,
        currentUser: null,
      };

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
    } else {
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
  }

  function selectUser(id) {
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

    navigate("/userhistory");
  }

  return (
    <div className="textcontainer">
      <h1 className="mainpageheading">Please select user</h1>
      {users.map((item) => {
        const {
          id,
          personelinfo: { name, email },
        } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={() => navigate(`/userhistory/${id}`)}>
              Select User
            </button>
            <button onClick={() => deleteUser(id)}>Delete User</button>
          </div>
        );
      })}
      <button
        className="fullwidthtextbutton"
        onClick={() => {
          navigate("/registeruser");
        }}
      >
        Add User
      </button>
    </div>
  );
}

export default UserSelectionPage;
