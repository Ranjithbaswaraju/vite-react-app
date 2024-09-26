
import { Table } from "antd";
import React, { useState } from "react"
const TableComponet=()=>{

   

    const columns=[{
        title:"NAME",dataIndex:"name"},
        {
            title:"AGE",dataIndex:"age"
        }
]

const dataSource=[{

    name:"ranjith",
    age:21


},

{
    name:"rajesh",
    age:19
},
{
    name:"amar",
    age:25
}]

const [data,setData]=useState(dataSource)
const [names,setNames]=useState(dataSource)

const eventHandler=(event)=>{
    console.log(event.target.value)

    if(event.target.value==="age"){
        const sortedData=[...data].sort((a,b)=>a.age-b.age)
        setData(sortedData)


    }
    if(event.target.name==="name"){
        const sortedNames=[...names].sort((a,b)=>a.name.length-b.name.length)
        setNames(sortedNames)
    }

}


    return(
        <>
        <select onChange={(value)=>{eventHandler(value)}}>
            <option value="name">name</option>
            <option value="age">age</option>
        </select>
        <Table dataSource={data} columns={columns}></Table>
        
        </>
        

    )

}
export default TableComponet;