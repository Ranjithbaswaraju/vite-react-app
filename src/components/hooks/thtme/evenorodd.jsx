// // import React, { useState } from "react";

import { useState } from "react"

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

// import React, { useState } from "react";

// const Even=()=>{
//     const[number,setNumber]=useState('')
//     let result=''

//     const handler=(e)=>{
//         setNumber(e.target.value)
//     }

//     if((number==="" || isNaN(number))){
//         result=""
//     }
//         else if(number%2==0){
//             result='even'
//         }
//         else{
//             result='odd'
//         }

//     return(
//         <>
//         <input value={number} onChange={handler}/>
//         <p>The entered Number is :{result}</p>
//         </>
//     )

// }
// export default Even;




const Even=()=>{
const[number,setNumber]=useState("")
let result=''

if((number=="" || isNaN(number))){
  result=""
}
else if(number%2==0){
  result="even"
}
else{
  result="odd"
}

let bgColor=""
if(result=="even"){
  bgColor="red"
}

else{
  bgColor="black"
}


return(
  <div style={{width:"100vw", height:"100vh" ,display:"flex" ,flexDirection:'column',justifyContent:"center" ,alignItems:'center',backgroundColor:bgColor}}>
 <div>
   <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
  <p style={{color:"white"}}>The Entered Number is :{result}</p>
 </div>
  </div>
)
} 
export default Even