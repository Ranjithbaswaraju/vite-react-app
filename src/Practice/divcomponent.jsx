

import React from "react";

const DivComponent = ({isCircle}) => {
    return (
        <div
        style={{ height: "100px", width: "100px", backgroundColor: "red",
            borderRadius: isCircle ? "50%" : "0",
            transition:'border-radius 1s ease-in-out'
        }}>
        </div>
    );
}
export default DivComponent