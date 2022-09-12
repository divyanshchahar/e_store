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

  //driver function
  async function executeOperation() {
    const userId = await checkUser();
  }
}
