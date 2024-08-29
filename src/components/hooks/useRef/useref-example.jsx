
import { useState } from "react"
import { useRef } from "react"

const UseRefExample=()=>{
        const reference=useRef(0)

        const [value,setValue]=useState(0)

        const Handler=()=>{
            reference.current+=1
            setValue(value+1)
            console.log(reference.current)
        }

        return(
            <>
            <h2>The useState-{value}</h2>
            <h2>The useRef-{reference.current}</h2>

            <button onClick={Handler}>Hello</button>
            
            </>
        )
}
export default UseRefExample