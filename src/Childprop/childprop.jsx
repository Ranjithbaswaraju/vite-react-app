

const Child=(prop)=>{
    const {children,text}=prop
    
    return(
        <>
         <h1>Hello {text}</h1>
         {children}
         </>
       
    )
}
export default Child;
