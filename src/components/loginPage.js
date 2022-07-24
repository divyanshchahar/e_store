// IMPORTING FUNCTIONALITY
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const LoginPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "adduuid" });
    dispatch({ type: "submitform" });
  };

  const intialState = {
    id: "",
    personelinfo: { name: "", email: "" },
    address: { house: "", street: "", town: "", pin: "" },
    pay: { nameOnCard: "", cardNumber: "", expiry: "", cvv: "" },
  };

  const [state, dispatch] = useReducer(loginReducer, intialState);

  const {
    personelinfo: { formName, formEmail },
    address: { formHouse, formStreet, formTown, formPin },
    pay: { formNameOnCard, formCardNumber, formExpiry, formCvv },
  } = state;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend> Personel Information</legend>

        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Name"
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
          placeholder="e-mail"
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

      <fieldset>
        <legend> Address</legend>

        <label>House/Apartment No</label>
        <br />
        <input
          type="text"
          placeholder="House/Apartment no"
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
          placeholder="street"
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
          placeholder="PIN"
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

      <fieldset>
        <legend>Payment Details</legend>

        <label>Name on the Card</label>
        <br />
        <input
          type="text"
          placeholder="name on the card"
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
          placeholder="card number"
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
          placeholder="valid upto"
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
          placeholder="CVV"
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
      <input type="submit" value="submit" />
    </form>
  );
};

export default LoginPage;
