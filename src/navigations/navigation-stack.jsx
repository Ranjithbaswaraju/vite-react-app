
import {  Route, Routes } from "react-router-dom"
import Homescreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import Navbar from "../components/navbar/navbar"
import Invalidscreen from "../screens/invalid-screen"
import { CategoryScreen } from "../screens/category-screen"
import { JewelleryScreen } from "../screens/jewellery-screen"
import { ElectronicsScreen } from "../screens/electronics-screen"
import { ProductScreen } from "../screens/product.screen"
import { ProductDetails } from "../screens/product-details-screen"
import { MensScreen } from "../screens/men-screen"
import { WomensScreen } from "../screens/women-screen"
import { createContext, useReducer, useState } from "react"
import { counterReducer, initialState } from "./counterHelper"




export const UserDeatails=createContext()
const ThemeDark=createContext()
export const GlobalCounter=createContext()



const NavigationStack=()=>{

    const[username,setUsername]=useState("ranjith")
    const [isDark,setisDark]=useState(true)
    const[salary,setSalary]=useState(10000)

    const [currentState,dispatch]=useReducer(counterReducer,initialState)

    const darkHandler=()=>{
        setisDark(!isDark)
    }
    const salaryHandler=()=>{
        setSalary(salary+10000)
    }
    const resetsalaryHandler=()=>{
        setSalary(0)
    }
    const decreasesalaryHandler=()=>{
        if(salary>0)
        setSalary(salary-10000)
        else
        alert("salary not in negative")
    }

    return(
        <>
        <GlobalCounter.Provider value={
           {currentState:currentState,dispatch:dispatch}

        }>
        <UserDeatails.Provider value={{
            username:"ranjith",
            darkTheme:isDark,
            salary:salary,
            darkHandler:darkHandler,
            salaryHandler:salaryHandler,
            resetsalaryHandler:resetsalaryHandler,
            decreasesalaryHandler:decreasesalaryHandler

            
        }}>

<>
        
        <Navbar/>
        {
            true ?
            <Routes>
        
            <Route path="/" element={<Homescreen/>}/> 
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/*" element={<Invalidscreen/>}/>
            <Route path="category" element={<CategoryScreen/>}>


            <Route index element={<ElectronicsScreen/>}/>
            <Route path="jewellery" element={<JewelleryScreen/>}/>
            <Route path="electronics" element={<ElectronicsScreen/>}/>
            <Route path="men's clothing" element={<MensScreen/>}/>
            <Route path="women's clothing" element={<WomensScreen/>}/>
            </Route>
            <Route path="products" element={<ProductScreen/>}/>

            <Route path="products/:productId" element={<ProductDetails/>}/>
        </Routes>

    :





        <Routes>
            <Route path="/login" element={<Homescreen/>}/> 
            {/* <Route path="/about" element={<AboutScreen/>}/> */}

        </Routes>
}
        </>

        </UserDeatails.Provider>
        </GlobalCounter.Provider>

        
        
        
</>
    )
}
export default NavigationStack