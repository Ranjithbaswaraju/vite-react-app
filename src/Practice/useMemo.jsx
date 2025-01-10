

import React, { useMemo, useState } from "react";

const UsememoExample=()=>{
    const[riceQty,setRiceQty]=useState(0)
    const[milkQty,setMilkQty]=useState(0)


    const RiceHandler=useMemo(()=>{
        console.log("Rice")
        const priceofRice=50
        return riceQty*priceofRice
    },[riceQty])

    const MilkHandler=useMemo(()=>{
        console.log("Milk")
        const pricofMilk=100
        
        return milkQty*pricofMilk
    },[milkQty])

    const handleMilk=()=>{
        setMilkQty(milkQty+1)
    }

    const handleRice=()=>{
        setRiceQty(riceQty+1)
    }


    return(
        <>
         <h4 >riceQty:{riceQty} price-{RiceHandler}</h4>
         <h4 >milkQty:{milkQty} price-{MilkHandler}</h4>
         <button onClick={handleRice}>Click Here-Rice</button>
         <button onClick={handleMilk}>Click Here-Milk</button>


        </>
    )
}
export default UsememoExample