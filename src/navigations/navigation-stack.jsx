
import {  Route, Routes } from "react-router-dom"
import Homescreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import Navbar from "../components/navbar/navbar"
import Invalidscreen from "../screens/invalid-screen"


const NavigationStack=()=>{
    return(
        <>
        
        <Navbar/>
        {
            true ?
            <Routes>
            <Route path="/" element={<Homescreen/>}/> 
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/*" element={<Invalidscreen/>}/>

        </Routes>

        
        :
        <Routes>
            <Route path="/login" element={<Homescreen/>}/> 
            {/* <Route path="/about" element={<AboutScreen/>}/> */}

        </Routes>
}
        </>
        
        

    )
}
export default NavigationStack