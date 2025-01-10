
import React from "react";
import CustomRectangleCard from "../components/bootstrap/custom-card";
import { Button } from "react-bootstrap";



const CardAddition=()=>{
    return(
<>
<Button variant="primary">Add Item</Button>
        <div className="container mt-3">
    <div className="row">
      <div className="col-sm-4">
      <CustomRectangleCard text={"Ranjith"} title={"React Dev"}/>
     
      </div>
      
    </div>
  </div>
</>
        
    )
}
export default CardAddition