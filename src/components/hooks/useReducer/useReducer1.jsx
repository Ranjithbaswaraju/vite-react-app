




import { useReducer } from "react";
const counterfunction=(state,action)=>{
    switch(action.type){
        case 'INC' :return state+1
        case 'DEC' :
            if (state <= 0) {
                alert("Count can't go below 0!");
                return state; // Return the same state without decrementing
            }
            return state - 1;
        case 'RESET' :return 0
        default :return state
    }
    
}

function UseApp(){
    const[count,dispatch]=useReducer(counterfunction,0)
    return(
        <>
        <button onClick={()=>
            dispatch({type:"INC"})
        } className="btn btn-primary">Increment</button>
        <button>{count}</button>
        <button onClick={()=>
            dispatch({type:"DEC"})
        } className="btn btn-primary">Decrement</button>

        <button onClick={()=>
            dispatch({type:'RESET'})
        } className="btn btn-danger">RESET</button>
        </>
       
    )
}
export default UseApp