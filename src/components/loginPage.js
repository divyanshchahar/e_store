// IMPORTING FUNCTIONALITY
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const LoginPage = () => {
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

      case "submitform":
        console.log(state);
        return state;

      default:
        return state;
    }
  }

  // FUNCTION TO HANDLE SUBMISSIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "adduuid" });
    dispatch({ type: "submitform" });
  };

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
        />
        <br />
      </fieldset>
      <input type="submit" value="Submit" className="submitbutton" />
    </form>
  );
};

export default LoginPage;
