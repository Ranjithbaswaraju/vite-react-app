import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`The current count is :${count}`);
  }, [count]);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Click here</button>
    </>
  );
};
export default UseEffect;
