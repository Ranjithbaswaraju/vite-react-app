




import axios from "axios";
import React, { useEffect, useState } from "react";
import Component1 from "../components/bootstrap/card";


export const WomensScreen=()=>{
    const [data,setData]=useState([])
    
    useEffect(()=>{
       
        fetchData()
    },[])


    const fetchData=async()=>{
        try{
        const response=await axios.get("https://fakestoreapi.com/products/category/women's clothing")

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
    <h2>Welcome to womens clothing</h2>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    {
        data.map(each=>
            <>
            <Component1
            key={each.id}
            title={each.title}
            image={each.image}
            text={each.description}
            category1={each.category}
            price={each.price}
            
            
            
            
            
            
            
            />
            </>
)
    }
    </div>

        </div>
    )
}