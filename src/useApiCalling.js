import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function useApiCalling(url) {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        setApiData(data);
      });
  }, [url]);

  return apiData;
}

export default useApiCalling;
