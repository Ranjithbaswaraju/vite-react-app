import React from "react";
import "./template.css"
const Template=()=>{
    return(
        <div className="parent_div">
            <div className="inner_div">
               <div className="details">
               <div className="logo"> <img className="image" src="https://www.24hr7comit.com/logo.jpg" /></div>
               <div><p><h1>24 HR 7</h1>COMMERCE PVT.LMT</p></div>
               </div>
               <div className="user_details">
                   <div className="user_title">
                   <p style={{fontSize:'50px'}}>CH <strong>MADHU</strong></p>
                   <p style={{color:'blue'}}>FOUNDER</p>
                   </div>
                  <div className="user_phone">
                    <div className="numbers">
                    <p>+91 9666698149</p>
                    <p>+91 9666698149</p>
                    </div>
                    <div>< img className="phone" src="https://listemoji.com/img/emoji/using/telephone-receiver-1f4de-toss.png"/></div>
                  </div>

                  <div className="user_internet">
                    <div className="numbers">
                    <p>sowjanyamadhu93@gmail.com</p>
                    <p>www.24hr7family.com</p>
                    </div>
                    <div>< img className="internet" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ESHCMfqw4r57HEwfB5HFTwG_cGkftSDO2vG5D7BBbiqx9Sjf_9LsaClxO3KGrBKa9Rw&usqp=CAU"/></div>
                  </div>
                  <div className="user_location">
                    <div className="numbers">
                    <p className="address">Plot 34,Saideep Nilayam,1st Floor,Sai Nagar Colony Mansoorabad,Hyderabad, Telangana, 500068</p>
                    </div>
                    <div>< img className="phone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzY7QDEqCDDmwhwQBBuDRq54FZt2CI5L7lQ&s"/></div>
                  </div>
                   
               </div>
            </div>
          
            <div className="outer_div">
               <div className="details1">
               <div className="logo"> <img className="image1" src="https://www.24hr7comit.com/logo.jpg" /></div>
               <div><p><h1>24 HR 7</h1>COMMERCE PVT.LMT</p></div>
               </div>
               <div className="user_details1">
               <div className="logo1"> <img className="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" /></div>
                   
                   
               </div>
            </div>
        </div>
    )
}
export default Template