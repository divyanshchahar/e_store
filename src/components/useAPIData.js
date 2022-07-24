// IMPORTING FUNCTIONALITY
import { useState, useEffect } from "react";

const useAPIData = (url) => {
  const [products, setProducts] = useState([]);

  function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, [url]);

  return products;
};

export default useAPIData;
