
// import React, { useState } from "react";

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [id, setId] = useState(null);

//   const start = () => {
//     const interval = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     setId(interval);
//   };

//   const stop = () => {
//     clearInterval(id);
//   };

//   const reset = () => {
//     clearInterval(id);
//     setTime(0);
//   };

//   const hours = Math.floor(time / 3600).toString().padStart(2, "0");
//   const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
//   const seconds = (time % 60).toString().padStart(2, "0");

//   return (
//     <div>
//       <h2>
//         {hours}:{minutes}:{seconds}
//       </h2>

//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default Stopwatch;


import React, { useState } from "react";


const Stopwatch=()=>{
    const[time,setTime]=useState(0);
    const[id,setId]=useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const startHandler=()=>{
        const interval=setInterval(()=>{
            setTime((prev=>prev+1))
        },1000)
        setId(interval)
        setIsRunning(true);
    }

    const stopHandler=()=>{
        clearInterval(id)
        setIsRunning(false);
    }

    const resetHandler=()=>{
        setTime(0)
        clearInterval(id)
          setIsRunning(false);
    }

    const hours=Math.floor(time/3600).toString().padStart(2,"0")
    const minutes=Math.floor((time%3600)/60).toString().padStart(2,"0")
    const seconds=Math.floor(time%60).toString().padStart(2,"0")

    return(
        <>
        <h1>Stop Watch</h1>

        {hours}:{minutes}:{seconds}

        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
        </>
    )
}
export default Stopwatch;