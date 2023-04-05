import React, { useEffect } from "react";

function useCount(count) {
  useEffect(() => {
    if (count > 0) {
      document.title = count;
    }
  }, [count]);
}

export default useCount;
