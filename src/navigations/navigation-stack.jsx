
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
        
        

    )
}
export default NavigationStack