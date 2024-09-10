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