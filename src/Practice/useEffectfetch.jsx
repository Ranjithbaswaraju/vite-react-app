import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

const UseEffectfetch=()=>{
    const[data,setData]=useState([])
        useEffect(()=>{

            const fetchData=async()=>{
                const response=await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
            }
            fetchData()
        },[])
    return(
        <>
        {
            data.map((item)=>{
                return(
                    <ol key={item.id}>
                    <li>{item.id}</li>
                    <li>{item.title}</li>
                    <li>{item.price}</li>
                    <li>{item.description}</li>
                    </ol>
                )
            })
        }

        </>
    )
}
export default UseEffectfetch