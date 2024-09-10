import { NavLink } from "react-router-dom"

import "./navbar.css"
import { useContext } from "react"
import { UserDeatails } from "../../navigations/navigation-stack"

const Navbar=()=>{

  const{darkTheme}=useContext(UserDeatails)
    
    const liStyle={margin:"10px"}
    return(
        <nav className={`navbar navbar-expand-sm bg-${darkTheme?"dark":"light"} navbar-${darkTheme?"dark":"light"} `}>
      <div className="container-fluid justify-content-center">
      <ul className="navbar-nav">
      <li className="nav-item" style={liStyle}>
        <NavLink to={"/"}>Main </NavLink>
      </li>
      <li className="nav-item" style={liStyle}>
      <NavLink to={"about"}>About </NavLink>
      </li>

      <li className="nav-item" style={liStyle }>
      <NavLink to={"category"}>Categories </NavLink>
      </li>


      <li className="nav-item" style={liStyle}>
      <NavLink to={"products"}>Products </NavLink>
      </li>
     
      
    </ul>
  </div>
</nav>


    )
}
export default Navbar