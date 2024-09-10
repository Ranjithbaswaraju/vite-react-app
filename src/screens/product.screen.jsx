
import axios from "axios"
// import React from 'react'
import { Component, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Component1 from "../components/bootstrap/card"
import { UserDeatails } from "../navigations/navigation-stack"
export const ProductScreen=()=>{

    const {username}=useContext(UserDeatails)


    console.log(username,"global Data")
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
    
    <h5>good afternoon {username}</h5>
   <h2> List of products</h2>
   {

products.length>0 && <>
    {
        products.map(each=><>
        <Component1></Component1>
        <h4>{each.title}</h4>
        <button><Link to={`${each.id}`}>View Product</Link></button>
       
        </>)
    }
    </>
   }
</div>


    )
}


