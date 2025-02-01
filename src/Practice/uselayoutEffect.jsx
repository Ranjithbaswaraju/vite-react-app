import React, { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: "50%", background: "lightblue", padding: "20px" }}>
        Resize me!
      </div>
      <p>Div Width: {width}px</p>
    </div>
  );
};

export default LayoutEffectExample;
