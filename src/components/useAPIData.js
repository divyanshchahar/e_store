import { useState, useEffect } from "react";

const useAPIData = (url) => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { product_data } = data;
        setProducts(product_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return products;
};

export default useAPIData;
