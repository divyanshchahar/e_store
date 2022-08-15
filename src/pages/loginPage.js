// IMPORTING FUNCTIONALITY
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

// IMPORTING COMPONENTS
import useAPIData from "../services/utils/useAPIData";

const LoginPage = () => {
  const url = "http://localhost:3001/users";

  const [appData] = useAPIData("http://localhost:3001/appdata");
  const navigate = useNavigate();

  // REDUCER
  function loginReducer(state, action) {
    switch (action.type) {
      case "setpersonelinfo":
        return {
          ...state,
          personelinfo: {
            ...state.personelinfo,
            [action.fieldname]: action.payload,
          },
        };

      case "setpay":
        return {
          ...state,
          pay: { ...state.pay, [action.fieldname]: action.payload },
        };

      case "setaddress":
        return {
          ...state,
          address: { ...state.address, [action.fieldname]: action.payload },
        };

      case "adduuid":
        return { ...state, id: uuidv4() };

      default:
        return state;
    }
  }

  // FUNCTION TO HANDLE SUBMISSIONS
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "adduuid" });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));

    const { userCount } = appData;
    const updatedData = { ...appData, userCount: userCount + 1 };

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

    navigate("/selectuser");
  }

  // VARIABLE TO INITALIZE REDUCER STATE
  const intialState = {
    id: "",
    personelinfo: { name: "", email: "" },
    address: { house: "", street: "", town: "", pin: "" },
    pay: { nameOnCard: "", cardNumber: "", expiry: "", cvv: "" },
  };

  const [state, dispatch] = useReducer(loginReducer, intialState); // reducer declaration

  // REDUCER STATE
  const {
    personelinfo: { formName, formEmail },
    address: { formHouse, formStreet, formTown, formPin },
    pay: { formNameOnCard, formCardNumber, formExpiry, formCvv },
  } = state;

  return (
    // FORM
    <form onSubmit={handleSubmit} className="inputform">
      {/* FIELDSET - PERSONEL INFORMATION */}
      <fieldset>
        <legend> Personel Information</legend>

        <label>Name</label>
        <br />
        <input
          type="text"
          value={formName}
          onChange={(e) => {
            dispatch({
              type: "setpersonelinfo",
              fieldname: "name",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>E-mail</label>
        <br />
        <input
          type="email"
          value={formEmail}
          onChange={(e) => {
            dispatch({
              type: "setpersonelinfo",
              fieldname: "email",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />
      </fieldset>

      {/* FIELDSET - ADDRESS */}
      <fieldset>
        <legend> Address</legend>

        <label>House/Apartment No</label>
        <br />
        <input
          type="text"
          value={formHouse}
          onChange={(e) => {
            dispatch({
              type: "setaddress",
              fieldname: "house",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>Street</label>
        <br />
        <input
          type="text"
          value={formStreet}
          onChange={(e) => {
            dispatch({
              type: "setaddress",
              fieldname: "street",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>Town</label>
        <br />
        <input
          type="text"
          placeholder="Town"
          value={formTown}
          onChange={(e) => {
            dispatch({
              type: "setaddress",
              fieldname: "town",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>PIN Code</label>
        <br />
        <input
          type="text"
          value={formPin}
          onChange={(e) => {
            dispatch({
              type: "setaddress",
              fieldname: "pin",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />
      </fieldset>

      {/* FIELDSET - PAYMENT DETAILS */}
      <fieldset>
        <legend>Payment Details</legend>

        <label>Name on the Card</label>
        <br />
        <input
          type="text"
          value={formNameOnCard}
          onChange={(e) => {
            dispatch({
              type: "setpay",
              fieldname: "nameOnCard",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>Card Number</label>
        <br />
        <input
          type="text"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={formCardNumber}
          onChange={(e) => {
            dispatch({
              type: "setpay",
              fieldname: "cardNumber",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>Valid Upto</label>
        <br />
        <input
          type="text"
          placeholder="MM/YY"
          value={formExpiry}
          onChange={(e) => {
            dispatch({
              type: "setpay",
              fieldname: "expiry",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />

        <label>CVV</label>
        <br />
        <input
          type="text"
          placeholder="XXX"
          value={formCvv}
          onChange={(e) => {
            dispatch({
              type: "setpay",
              fieldname: "cvv",
              payload: e.currentTarget.value,
            });
          }}
          required
        />
        <br />
      </fieldset>
      <input type="submit" value="Submit" className="submitbutton" />
    </form>
  );
};

export default LoginPage;
