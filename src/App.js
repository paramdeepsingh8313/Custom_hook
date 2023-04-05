import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Test from "./Test";
import useCount from "./useCount";
import useApiCalling from "./useApiCalling";

function App() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState(false);

  // const [data, setData] = useState();

  useCount(count);

  const a = useApiCalling("https://jsonplaceholder.typicode.com/albums");

  console.log("api data is APP Page ", a);

  return (
    <div className="App">
      {state ? (
        <div>
          <h1>App page</h1>
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
      ) : (
        <Test />
      )}
    </div>
  );
}

export default App;
