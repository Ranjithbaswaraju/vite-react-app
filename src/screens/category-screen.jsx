



import React from "react";
import { Link, Outlet } from "react-router-dom";

export const CategoryScreen=()=>{
    return(
        <div>
         <h2>Category Screen</h2>

         <Link to={"electronics"}>Electronics</Link>
         <Link to={"jewellery"}>Jewellery</Link>
         <Link></Link>
         <Outlet/>
        </div>
       
    )
}