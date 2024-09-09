

import React, { useEffect, useState } from "react";
import axios from "axios";


export const JewelleryScreen=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
        const response=await axios.get('https://fakestoreapi.com/products/category/jewelery')
        if(response.status===200){
                setData(response.data)
        }
    }
    catch(err){
        console.log(err)
    }
    }
    return(
        <div>
            <h2>Welcome to Jewellery products</h2>
            {
                data.map(each=>
                    <>
                    <p>{JSON.stringify(each)}</p>
                    </>
                )
            }





        </div>
    )
}