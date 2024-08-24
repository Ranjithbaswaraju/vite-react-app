

import { Component } from "react"
import { successToasts } from "../toasts/toast-helpers"
import style from "./converter.module.css"


class Converter extends Component{
    state={
        kelvin:'',
        celcius:''
    }

    celciusHandler=(event)=>{
        const celcius=event.target.value
        this.setState({
            celcius:celcius,
            kelvin:celcius?(parseFloat(celcius)*274.15):''
        },()=>{
            successToasts("Hello","top-right")
        })
    }
    kelvinsHandler=(event)=>{
        const kelvin=event.target.value
        console.log(event)
        this.setState({
            kelvin:kelvin,
            celcius:kelvin?(parseFloat(kelvin)*-274.15).toFixed(2):''
        })
    }
    render(){
        
        return(
            <>

            <div className={style.form}>
             
            <input type="number" 
            value={this.state.celcius}
            onChange={this.celciusHandler} 
            placeholder="celcius">
            </input>

            
            <input
            type="number"
            value={this.state.kelvin}
            onChange={this.kelvinsHandler} 
            placeholder="kelvin">
            </input>
            </div>
            </>
            
            
        )
    }
}

export default Converter;

