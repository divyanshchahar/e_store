async function getapidata(url) {
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

export default getapidata;
