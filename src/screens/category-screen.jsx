import React from "react";
import { Link, Outlet } from "react-router-dom";

export const CategoryScreen = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Category Screen</h2>

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
