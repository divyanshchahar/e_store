const LoginPage = () => {
  return (
    <form>
      <fieldset>
        <legend> Personel Information</legend>

        <label>Name</label>
        <br />
        <input type="text" placeholder="Name" />
        <br />

        <label>E-mail</label>
        <br />
        <input type="email" placeholder="e-mail" />
        <br />
      </fieldset>

      <fieldset>
        <legend> Address</legend>

        <label>House/Apartment No</label>
        <br />
        <input type="text" placeholder="House/Apartment no" />
        <br />

        <label>Street</label>
        <br />
        <input type="text" placeholder="street" />
        <br />

        <label>Town</label>
        <br />
        <input type="text" placeholder="Town" />
        <br />

        <label>PIN Code</label>
        <br />
        <input type="text" placeholder="PIN" />
        <br />
      </fieldset>

      <fieldset>
        <legend>Payment Details</legend>

        <label>Name on the Card</label>
        <br />
        <input type="text" placeholder="name on the card" />
        <br />

        <label>Card Number</label>
        <br />
        <input type="text" placeholder="card number" />
        <br />

        <label>Valid Upto</label>
        <br />
        <input type="text" placeholder="valid upto" />
        <br />

        <label>CVV</label>
        <br />
        <input type="text" placeholder="CVV" />
        <br />
      </fieldset>
      <input type="submit" value="submit" />
    </form>
  );
};

export default LoginPage;
