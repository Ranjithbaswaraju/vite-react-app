import React from "react";
// import CustomButton from "./Practice/props";
import MainHeading from "./Practice/headings";

// import OrderList from "./Practice/list";
import {data} from "./Practice/recipe.js"






const App = () => {
  return (
    <>
   {/* <CustomButton text="lOGIN" onPress={()=>{}} bgColor="red"/>
   <CustomButton text="REG" onPress={()=>{}} bgColor="green"/>



    <MainHeading heading="List of players"/>
    <OrderList list={["rohit","virat"]}/>
    <SecondaryHeading heading="List of fruits"/>
    <OrderList list={["apple","banana"]}/> */}

{
    data.map(eachItem=>{
      return(
        <div key={eachItem.id}>
        <MainHeading heading={eachItem.name}/>
        </div>
      )
    })


}

    
    </>
  );
}

export default App;
