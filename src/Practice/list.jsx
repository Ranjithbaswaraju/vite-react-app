import React from "react";

const OrderList=(prop)=>{
    const{list}=prop
    return(
        <ol>
           {
            list.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })
           } 
        </ol>
    )
}
export default OrderList

export  const UnorderedList=()=>{
    return(
        <ul>
            <li>bye</li>
        </ul>
    )
}