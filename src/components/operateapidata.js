// IMPORTING FUNCTIONALITY
import { useState, useEffect } from "react";


const useOperateAPiData = ([url, args]) => {
  const [status, setStatus] = useState("processing");
  const operateData = () => {
    fetch(url, args)
      .then((response) => response.json())
      .then((data) => {
        setStatus("Done");
      });
  };

  useEffect(() => {
    operateData();
  }, [url, args]);

  return status;
};

export default useOperateAPiData;
