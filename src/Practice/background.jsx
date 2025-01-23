

import React, { useState } from "react";
import background from './background.css'

const ThemeChanger=()=>{
    const[isDarkTheme,setIsDarkTheme]=useState(false)

    const clickHandler=()=>{
        setIsDarkTheme(isDarkTheme)
    }
    
    return(
        <>
        <div className={isDarkTheme?"dark":"light"}
        style={{height:"100vh",width:"100vw"}}>
            <h1>Theme Chnager</h1>
            <button onClick={clickHandler}>Click Here</button>
        </div>
        </>
    )
}
export default ThemeChanger