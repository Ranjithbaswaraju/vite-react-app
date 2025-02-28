import React, { useMemo, useState } from "react";


const UsememoExample=()=>{
    const[riceQty,setRiceQty]=useState(0);
    const[milkQty,setMilkQty]=useState(0)

    const milkHandler=useMemo(()=>{
        const price=50
        console.log("milk price calculation>>>>>")
        return price*milkQty

    },[milkQty])
    const riceHandler=useMemo(()=>{
        const price=100
        console.log("rice price calculation>>>>>")
        return price*riceQty
    },[riceQty])

    const milkInc=()=>{
        setMilkQty(milkQty+1)
    }

    const riceInc=()=>{
        setRiceQty(riceQty+1)
    }
    return(
        <>
        <p>Rice-Quantity-{riceQty} && Price-{riceHandler}</p>
        <p>Milk-Quantity-{milkQty} && price-{milkHandler}</p>
        <button onClick={milkInc}>MilK</button>
        <button onClick={riceInc}>Rice</button>
        </>
    )

}
export default UsememoExample