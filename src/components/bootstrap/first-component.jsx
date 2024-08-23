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
      <CustomRectangleCard text={"Ranjith"} title={"React Dev"} imagesrc={"https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/15/full/1647365891-7103.jpg?im=FitAndFill=(826,465)"}/>
     
      </div>
      <div className="col-sm-4">
       <CustomRectangleCard text={"John"} title={"Angular dev"} imagesrc={"https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg"}/>
      </div>
      <div className="col-sm-4">
        <CustomRectangleCard text={"Micheal"} title={"HTML Dev"} imagesrc={"https://p.imgci.com/db/PICTURES/CMS/366600/366647.jpg"}/>
      </div>
    </div>
  </div>
</>

    )
}

export default FirstComponent;