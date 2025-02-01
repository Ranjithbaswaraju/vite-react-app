import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";

const UseEffectfetch=()=>{
    const[data,setData]=useState([])


    useEffect(()=>{
        const data1=async()=>{
            try{
                const response=await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
            }
            catch(error){
                console.log("The error is ",error)
            }
            
        }
        data1()

    },[])
    return(
        <div style={{display:'flex',flexWrap:"wrap", gap:"50px",justifyContent:'center'}}>

    {
        data.map((item)=>{
            return(
                <>
                <CardComponent  
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
                ranjith={item.category}
                />
                </>
            )
        })
    }
        
        </div>
    )
}
export default UseEffectfetch