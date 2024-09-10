

import React, { Component, useContext, useEffect, useState } from "react";
import axios from "axios";
import Component1 from "../components/bootstrap/card";
import { UserDeatails } from "../navigations/navigation-stack";




export const JewelleryScreen=()=>{

    const {username}=useContext(UserDeatails)


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
            <h3>Welcome {username}</h3>
            <h2>Welcome to Jewellery products</h2>
            <div style={{display:'flex', flexWrap:'wrap',gap:'20px'}}>
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