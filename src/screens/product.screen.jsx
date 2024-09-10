
import axios from "axios"
// import React from 'react'
import { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Component1 from "../components/bootstrap/card"
export const ProductScreen=()=>{
    const[products,setProducts]=useState([])

    useEffect(()=>{

       
        fetchData()
    },[])


    const fetchData=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        if(response.status==200){
            setProducts(response.data)
        }
    }

    
    return(
<div>
    
    
   <h2> List of products</h2>
   <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
   {

products.length>0 && <>
    {
        products.map(each=><>
        <Component1 to={`${each.id}`} 
            
            title={each.title}
            image={each.image}
            price={each.price}
            
            
            
            />
        
       
       
        </>)
    }
    </>
   }
   </div>
</div>


    )
}


