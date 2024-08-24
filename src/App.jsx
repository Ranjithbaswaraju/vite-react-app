
// import Button from "./Button/button"
// import Heading from "./header/header"
// import CustomRectangleCard from './components/bootstrap/custom-card'
// import { employeeDetails } from "./data/employedata"
// import FirstComponent from "./components/bootstrap/first-component"
import Converter from "./components/class/conveter";
import YoutubeButton from "./components/class/youtube-button";
// import Converter from "./components/class/conveter";


const App=()=>{


  // return(
  //  <div>
  //   {/* <Button/>
  //   <Heading/> */}
  
  //   <CustomRectangleCard text="Ranjith" title="React developer"/>
  //  </div>
   
    
  // )

  return(
    <div>
{/* <FirstComponent/> */}

{/* <YoutubeButton/> */}
<Converter/>

      {/* {
        employeeDetails.map(each=>{
          return(
            <>
            <CustomRectangleCard text={each.name} title={each.designation}/>
            </>
          )
        })
      } */}
    </div>
  )
}
export default App;



