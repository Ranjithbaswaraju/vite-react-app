

class component:


import {Component} from 'react'
class Greeting extends Component{
    render(){
        return(
            <h3>Hello</h3>
        )
    }
}

React state:

React state is an object which is used to hold the information or data of a paerticular component.

example:


React state is a private to a component

state is mutable

State is applicable for both class and functional component

How to create state in class compoenents?

There are 2 ways to create a state in class components:

1.Object way of creation.
2.Constructor way


To access the state in class component ,we need to use to this.state.property

Note :TO attach the event in class components we need to use this.methodName

Mutate the state:
To mutate the state in class components , we need to use this.setState method
note:Only way to change the state is by this.setState


setState method syntax:
it will accept 2 arguments 1.Object or function 2.Function

this.setState({
    //state changes
},()=>{
    //To check the latest state changes
})

note:State chnages are asynchronous
note:When we use setState method,component will re-render(re-excuted ti show updated chnages)


room--component
books--state