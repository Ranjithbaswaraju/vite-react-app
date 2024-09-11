Use reducer() hook in react:

Syntax:

key difference b/w usereducer() and use State():
use State():
useState(initialSate)

const[count,setCount]=useState(initialState)






use Reducer()
use Reducer will accept the initial state along with function
it return s the array.
useReducer(function,initialState)
const[count,dispatch]=useReduce(function,initialState)


class Notes:
useState-create and manage the data with in a component

useState+ useContext--global state management

useReducer+useContext--global state management for complex logics in the state

ex:{
    username:"raju",
    age:33,
    todo:[],
    homeaddress:{

    }
}

useReducer syntax:

it accepts 2 arguments:

1.reducerFunction
2.initialState

it returns array , which contains 2 values 
1.currentState
2.dispatch function

const [currentState,dispatchFunction]=useReducer(reducerFunction,initialState)


reducerFunction:it is the pure function , it takes action and state as parameters and based on the action corresponding state will change

const= reducer=(state,action)=>{
    action==="INCREMENT_AGE"---{...state,age:state.age+1}
    action==="CHANGE_USERNAME"---{...state,username:"new name"}
}
ex:Age-->INCREMENT_AGE,  DECREMENT_AGE

action is an object which tells what to happen to a state

action can contains the properties

type is a mandatory property

payload is optional(how much the age incremented)

{

    type:"INCREMENT_AGE"
}

dispatchFunction:To dispatch an action we must use dispatchFunction which accepts the action




Task is there


TODO Crud operation by using the useReducer


data impoted in about screen and the check data in about screen there will seen the data in TODO
