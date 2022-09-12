export default function checkout() {
  // function to get data from api call
  async function getData(url) {
    try {
      const response = await fetch(url);
      if (response.status < 400) {
        const data = await response.json();
        return [data, "ok"];
      } else {
        return ["", "request failed"];
      }
    } catch {
      return ["", "network error"];
    }
  }

  // function to ckeck if user has loggeded in
  async function checkUser() {
    const [[appData], statusCode] = await getData(
      "http://localhost:3001/appdata"
    );
    if (statusCode === "ok") {
      const { currentUser } = appData;
      if (currentUser) {
        return currentUser;
      } else {
        return false;
      }
    } else {
      // unable to get api response
    }
  }

  //function to extract cart of a user
  async function getCart(isLoggedIn) {
    const requestUrl = "http://localhost:3001/cart/";
    const completeUrl = requestUrl.concat(isLoggedIn);
    const [cartData, statusCode] = await getData(completeUrl);
    if (statusCode === "ok") {
      if (cartData) {
        return cartData;
      } else {
        return null;
      }
    } else {
      // unable to get api response
    }
  }

  //driver function
  async function executeOperation() {
    const userId = await checkUser();

    if (userId) {
      const cartData = getCart(userId);
    } else {
      // throw error user not logged in
    }
  }
}
