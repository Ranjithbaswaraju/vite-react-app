import {useState} from "react";
import { Button } from "./buttonjshlper";

const Button1=()=>{
    const[buttons,setButton]=useState(Button())
    const[message,setMessage]=useState("")

    const handleCLick=(id)=>{
        const even=id%2==0;
        setMessage(even?`Button ${id} is even`:`Button ${id} is odd`)
    }
    return(
        <>
         <h1>{message}</h1>
        {
            buttons.map((each)=>{
                return(
                    <>
                    
                    <button key={each.id} onClick={()=>handleCLick(each.id)} style={{width:'100px'}}>{each.text}</button>
                
                    </>
                    
                )
            })
        }
       
        </>
    )
}

export default Button1