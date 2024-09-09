import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const ProductDetails =()=>{

    const dynamicPath=useParams()
    const[productData,setProductData]=useState({})


    useEffect(()=>{
        fetchData()
    },[dynamicPath])


    const fetchData=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productId}`)
        if(response.status===200){
            setProductData(response.data)
        }
    }


    console.log(dynamicPath,"dynamic path")
    return(
        <div>
            <h3>product data</h3>
            {
                Object.keys(productData).length>0 && <>
                <h2>{productData.title}</h2>
                <img src={productData.image}/>
                <p>{productData.description}</p>
                
                </>
            }
        </div>
    )
}