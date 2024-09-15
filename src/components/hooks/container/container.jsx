import { useMemo, useState } from "react"
import Screen from "./screen"

function UseMemoEx3(){

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
    <Screen 
    age={age}
    ageEvenChecker={ageEvenChecker}
    salary={salary}
    setSalaryHandler={setSalaryHandler}
    setAgeHandler={setAgeHandler}/>
        
        </>
       
    )

}
export default UseMemoEx3