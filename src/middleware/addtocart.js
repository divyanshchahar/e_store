function addToCart(productid) {
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

  //function to update JSON
  function putData(url, args) {
    fetch(url, args);
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

  // function to check if an item is already present in the cart
  async function checkItem(cartData) {
    var isItem = false;
    const { cartItems } = cartData;
    cartItems.map((item) => {
      if (item.pid === productid) {
        isItem = true;
      }
    });
    return isItem;
  }

  // function to add item
  async function increaseQty(cartData, userId) {
    const { cartItems } = cartData;
    cartItems.map((item) => {
      if (item.pid === productid) {
        item.qty += 1;
      }
    });
    const updateUrl = "http://localhost:3001/cart/";
    const url = updateUrl.concat(userId);
    const args = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    };
    putData(url, args);
  }

  //function to add item if it is not present
  async function addItem(cartData, userId) {
    const temp = { pid: productid, qty: 1 };
    cartData.cartItems.push(temp);
    const updateUrl = "http://localhost:3001/cart/";
    const url = updateUrl.concat(userId);
    const args = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    };
    putData(url, args);
  }

  //function to add cart if it is not present
  async function addCart(userId) {
    const cartData = { id: userId, cartItems: [{ pid: productid, qty: 1 }] };
    const url = "http://localhost:3001/cart";
    const args = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    };
    putData(url, args);
  }

  // driver function
  async function executeOperation() {
    const userId = await checkUser();

    if (userId) {
      const cartData = await getCart(userId);
      if (cartData) {
        const isItem = await checkItem(cartData);
        if (isItem) {
          increaseQty(cartData, userId);
        } else {
          addItem(cartData, userId);
        }
      } else {
        addCart(userId);
      }
    } else {
      // user not logged in
    }
  }

  executeOperation();
}

export default addToCart;
