import { useEffect, useState } from "react";
import React  from "react";
import axios from "axios";


const UseEffectfetch=()=>{

    const[data,setData]=useState([[]])

    useEffect(()=>{
        const dataFetch=async()=>{
            const response=await axios.get('https://dummyjson.com/recipes')
            setData(response.data.recipes)
        }
        dataFetch()
    })
    return(
        <>
        {
            data.map((item)=>{
                return(
                    <>
                    <li>{item.id}</li>
                    <li>{item.image}</li>
                    </>
                )
            })
        }
        </>
    )
}
export default UseEffectfetch