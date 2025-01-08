

import { Component } from "react";
import { successToasts } from "../components/toasts/toast-helpers";
import { errorToasts } from "../components/toasts/toast-helpers";

class Counter extends Component{

    state={
        count:0
    }

    increment=()=>{
        this.setState({count:this.state.count+1},
            ()=>{
                successToasts(`The current Toast ${this.state.count}`)
            })
    }

    decrement=()=>{
        this.setState({count:this.state.count-1},
            ()=>{
                errorToasts(`The decrement count is ${this.state.count}`)
            }
        )
    }
    render(){
        return(
            <>
            <h2>Counter:{this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>

            </>
        )
    }
}
export default Counter