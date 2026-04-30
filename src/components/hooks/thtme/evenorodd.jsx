// // import React, { useState } from "react";

// // const Even=()=>{
// //     const[number,setNumber]=useState("")

// //     const handler=(event)=>{
// //         setNumber(event.target.value)
// //     }
// //     const result=isNaN(number)||number==""?"":
// //     number%2===0?'even ':"Odd"

// //     return(
// //         <>
// //         <input value={number} onChange={handler}/>
// //         <p>The entered vale is {result}</p>
// //         </>
// //     )
// // }
// // export default Even

// // import React, { useState } from "react";

// // const Even=()=>{
// //     const[number,setNumber]=useState("")

// //     const handler=(event)=>{
// //         setNumber(event.target.value)
// //     }

// //     const result=isNaN(number)||number===""?"":
// //     number%2==0?"even":"odd"

// //     return(
// //             <>
// //             <input type="text" value={number} onChange={handler}/>
// //             <p>The numebr is :{result}</p>
// //             </>
// //     )
// // }
// // export default Even

// // import React, { useState } from "react";

// // const Even = () => {
// //   const [number, setNumber] = useState("");
// //   let result = "";

// //   const handler = (e) => {
// //     setNumber(e.target.value);
// //   };

// //   // check condition
// //   if (number === "" || isNaN(number)) {
// //     result = "";
// //   } else if (number % 2 === 0) {
// //     result = "even";
// //   } else {
// //     result = "odd";
// //   }

// //   return (
// //     <>
// //       <input type="text" value={number} onChange={handler} />
// //       <p>The number is: {result}</p>
// //     </>
// //   );
// // };

// // export default Even;

// // import React, { useState } from "react";

// // const Even=()=>{

// //     const[number,setNumber]=useState("")
// //     let result=''

// //     const handler=(e)=>{
// //         setNumber(e.target.value)
// //     }

// //     if(number===""||isNaN(number)){
// //         result=""
// //     }
// //     else if(number % 2==0){
// //         result="even"
// //     }
// //     else{
// //         result="odd"
// //     }

// //     return(
// //         <>
// //         <input type="text" value={number} onChange={handler}/>
// //         <p>The Entered Number is :{result}</p>
// //         </>
// //     )

// // }
// // export default Even;

import React, { useState } from "react";

const Even=()=>{
    const[number,setNumber]=useState('')
    let result=''

    const handler=(e)=>{
        setNumber(e.target.value)
    }

    if((number==="" || isNaN(number))){
        result=""
    }
        else if(number%2==0){
            result='even'
        }
        else{
            result='odd'
        }

    return(
        <>
        <input value={number} onChange={handler}/>
        <p>The entered Number is :{result}</p>
        </>
    )

}
export default Even;



// import React, { useState } from "react";

// const Even = () => {
//   const [number, setNumber] = useState("");
//   let result = "";

//   const handler = (e) => {
//     setNumber(e.target.value);
//   };

//   if (number == "" || isNaN(number)) {
//     result = "";
//   }
//    else if (number % 2 == 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   let bgColor = "";
//   if (result == "even") {
//     bgColor = "orange";
//   } else {
//     bgColor = "blue";
//   }
//   return (
//     <>
//       <div
//         style={{ height: "100vh", width:"100vw", backgroundColor: bgColor ,display:'flex', justifyContent:"center",alignItems:'center' ,flexDirection:'column'}}
//       >
//         <p>The entered number is :{result}</p>
//         <input type="text" value={number} onChange={handler} />
        
//       </div>
//     </>
//   );
// };

// export default Even