import { useState, useEffect, useCallback } from "react";

const useAPIData = (url) => {
  const [products, setProducts] = useState([]);

  const getData = useCallback(async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return products;
};

export default useAPIData;
