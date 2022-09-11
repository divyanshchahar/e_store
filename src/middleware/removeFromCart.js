function removeFromCart(productid) {
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
    const [cartData, statusCode] = await getData(
      `http://localhost:3001/cart/${isLoggedIn}`
    );
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

  // function to decide further course of action
  async function decideCourse(cartData, userId) {
    const cartItems = cartData.cartItems;
    const itemCount = cartItems.length;

    const selectedItem = cartItems.filter((item) => {
      return item.pid === productid;
    });

    const qty = selectedItem[0].qty;
    const course = "";

    if (itemCount === 1) {
      if (qty === 1) {
        deleteCart(userId);
      } else {
        decreaseQty(cartData, userId);
      }
    } else {
      if (qty === 1) {
        removeItem(cartData, userId);
      } else {
        decreaseQty(cartData, userId);
      }
    }
    return course;
  }

  // function to decrease quantity
  async function decreaseQty(cartData, userId) {
    const products = cartData.cartItems;

    const newProducts = products.map((item) => {
      if (item.pid === productid) {
        item.qty -= 1;
      }
      return item;
    });

    const newData = { ...cartData, cartItems: newProducts };
    const url = `http://localhost:3001/cart/${userId}`;
    const args = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };

    putData(url, args);
  }

  // function to remove an item
  async function removeItem(cartData, userId) {
    const products = cartData.cartItems;

    const newProducts = products.filter((item) => {
      return item.pid !== productid;
    });

    const newData = { ...cartData, cartItems: newProducts };
    const url = `http://localhost:3001/cart/${userId}`;
    const args = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };

    putData(url, args);
  }

  // function to delte cart
  async function deleteCart(userId) {
    const url = `http://localhost:3001/cart/${userId}`;
    const args = {
      method: "DELETE",
    };

    putData(url, args);
  }

  // driver function
  async function executeOperation() {
    const userId = await checkUser();

    if (userId) {
      const cartData = await getCart(userId);
      if (cartData) {
        const course = await decideCourse(cartData, userId);
      }
    }
  }

  executeOperation();
}

export default removeFromCart;
