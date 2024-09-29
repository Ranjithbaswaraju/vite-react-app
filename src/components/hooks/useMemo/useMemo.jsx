import { useMemo, useState } from "react"
const UseMemo=()=>{

    const[milkQuantity,setmilkQuantity]=useState(1)
    const[riceQuantity,setRiceQuantity]=useState(1)


    const milkPriceCalculation=useMemo(()=>{

        console.log("milk price calculation>>>>>")
        const priceOfMilk=50
        return milkQuantity*priceOfMilk
    },[milkQuantity])


    const ricePriceCalculation=useMemo(()=>{
        console.log("rice price calculation>>>>>")

        const priceOfRice=100
        return riceQuantity*priceOfRice
    },[riceQuantity])

    const milkHandler=()=>{
        setmilkQuantity(milkQuantity+1)
    }
    const riceHandler=()=>{
        setRiceQuantity(riceQuantity+1)
    }


    return(

        <>
        <h4>Milk Quantity {milkQuantity} --price{milkPriceCalculation}</h4>

        <h4>Rice Quantity {riceQuantity}  --price{ricePriceCalculation}</h4>

        <button onClick={milkHandler}>Enter milk</button>
        <button onClick={riceHandler}>Enter rice</button>



        
        </>
    )
}
export default UseMemo