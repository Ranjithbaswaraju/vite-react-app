import React, { useRef } from "react";
const UseRefExample = () => {
  const inputRef = useRef(null);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={clickHandler}>Click to focus</button>
    </>
  );
};
export default UseRefExample;
