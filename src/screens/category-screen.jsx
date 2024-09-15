import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalCounter } from "../navigations/navigation-stack";
import { incrementAction, } from "../navigations/counterHelper";
import { decrementAction } from "../navigations/counterHelper";
import useAxios from "../components/hooks/customHooks/useAxios";
export const CategoryScreen = () => {


  const{dispatch}=useContext(GlobalCounter)

 const [categories,error,loading]= useAxios('https://fakestoreapi.com/products/categories')
 console.log(categories,"categoriescategories")
  const incrementHandler=()=>{
    dispatch( incrementAction)
  }


  // const{dispatch}=useContext(GlobalCounter)
  const decrementHandler=()=>{
    
    dispatch(decrementAction)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Category Screen</h2>
<button onClick={incrementHandler}>increment count value</button>
<button onClick={decrementHandler}>Decrement count value</button>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px',fontSize:'20px' }}>
        <Link to={"electronics"} style={{ margin: '0 15px' }}>Electronics</Link>
        <Link to={"jewellery"} style={{ margin: '0 15px' }}>Jewellery</Link>
        <Link to={"men's clothing"} style={{ margin: '0 15px' }}>Men</Link>
        <Link to={"women's clothing"} style={{ margin: '0 15px' }}>Women</Link>
      </div>

      <Outlet />
    </div>
  );
};
