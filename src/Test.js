import React, { useEffect, useState } from "react";
import useCount from "./useCount";
import useApiCalling from "./useApiCalling";

function Test() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  //   useEffect(() => {
  //   setData(useApiCalling("https://jsonplaceholder.typicode.com/users"));
  //   }, []);

  const a = useApiCalling("https://jsonplaceholder.typicode.com/users");

  console.log("api data is test Page ", a);

  useCount(count);
  return (
    <div>
      <div>
        <h1>Test Page</h1>
        {count}
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Test;
