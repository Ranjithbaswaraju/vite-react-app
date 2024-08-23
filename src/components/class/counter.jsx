import { Component } from "react";
import { successToasts } from "../toasts/toast-helpers";
import { errorToasts } from "../toasts/toast-helpers";


class Counter extends Component{
    state={
        count:0
    }
    incrementHandler=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            successToasts(`The current count is ${this.state.count}`)
        })
    }
    decrementHandler=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            errorToasts(`The current count is ${this.state.count}`)
        })
    }
    resetHandler=()=>{
        this.setState({
            count:0
        })
    }
    render(){
        return(
        <>
        <h2>Counter {this.state.count}</h2>  
         <button onClick={this.incrementHandler}> Increment</button> 
         <button onClick={this.decrementHandler}>Decrement</button>
         <button onClick={this.resetHandler}>Reset</button>
         </>
         
        )
    }
}

export default Counter;