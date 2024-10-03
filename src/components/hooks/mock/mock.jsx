import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import Component1 from "../../bootstrap/card";

const MockExample=()=>{

    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetchData()
    },[products])

    const fetchData=async()=>{
        const finalData=await axios.get("https://fakestoreapi.com/products")
        setProducts(finalData.data)
    }


    return(
        <>
         <h1 style={{textAlign:'center'}}>Fake Store Products</h1>
        {

           
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',gap:'10px'}}>
                {
                    products.map((item,index)=>(
                        <>
                        <Component1 key={index}
                        title={item.title}
                        image={item.image}
                        category1={item.category}
                        price={item.price}

                        text={item.description}
                        
                        />
                        </>
                    ))
                }
            </div>
        }

        </>
    )
}
export default MockExample