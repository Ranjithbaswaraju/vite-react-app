
// USING IF/ELSE
// const User=({isAdmin=false})=>{
//     if(isAdmin){
//         return(
//             <h1>Hello</h1>
//         )
//     }
//     else{
//         return(
//             <h1>Bye</h1>
//         )
//     }
// }
// export default User;



// USING TERNORY OPERATOR
// const User=(prop)=>{
//   const {isAdmin}=prop
//   return(
//     <div>
//         {isAdmin ?<h3>Welcome User</h3>:<h3>Welcome Admin</h3>}     //another way 
//         <h3>Welcome {isAdmin?"User":"Admin"}</h3>    //another way

//     </div>

//   )

// }


//  Logical and or short circuit(only true part wil consider)
// const User =(prop)=>{
//    const{isAdmin}=prop;
//    return(
//     <div>
//          {isAdmin && <h3>Welcome user</h3>}
//     </div>
   
//    ) 
// }

//Switch case:

const User=(prop)=>{
    const{isAdmin}=prop;
    return(
        <div>
            
        </div>
    )
}
export default User;