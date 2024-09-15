import { useMemo, useState } from "react"

function UseMemoEx2(){

    const[age,setAge]=useState(10)
    const[salary,setSalary]=useState(1000)


    const ageEvenChecker=useMemo(()=>{
        console.log("even checker")
        return age % 2===0 ? "age is even" :"age is odd"
    },[age])


    const setAgeHandler=()=>{
        setAge(age+1)
    }
    const setSalaryHandler=()=>{
        
        setSalary(salary+1000)
    }


    
    return(
        <>
        <h2>{age } {ageEvenChecker}</h2>
        <h2>{salary}</h2>

        <button onClick={setSalaryHandler}>Increase salary</button>
        <button onClick={setAgeHandler}>Increase Age</button>
        
        </>
       
    )

}
export default UseMemoEx2