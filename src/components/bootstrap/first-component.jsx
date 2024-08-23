import CustomRectangleCard from "./custom-card";

const FirstComponent=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <CustomRectangleCard text={"Ranjith"} title={"React Dev"}/>
      </div>
      <div className="col-sm-4">
       <CustomRectangleCard text={"John"} title={"Angular dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"}/>
      </div>
      
    </div>
  </div>
</>

    )
}

export default FirstComponent;