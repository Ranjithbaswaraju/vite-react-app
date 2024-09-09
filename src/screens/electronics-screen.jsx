


import axios from "axios";
import React, { useEffect, useState } from "react";


export const ElectronicsScreen=()=>{
    const [data,setData]=useState([])
    
    useEffect(()=>{
       
        fetchData()
    },[])


    const fetchData=async()=>{
        try{
        const response=await axios.get('https://fakestoreapi.com/products/category/electronics')

        if(response.status==200){
            setData(response.data)
        }
        }
        catch(err){
            console.log(err)
        }
       
    }



    return(
        <div>
    <h2>Welcome to electronics</h2>


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