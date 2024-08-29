import { Component } from "react";
import CustomRectangleCard from "../bootstrap/custom-card";
import { Button } from "react-bootstrap";


class CardAddition extends Component{
    state={
        employeeData:[]
        ,
    }
    clickHandler=()=>{
        //Need to add cards hare
        // const newData={name:"ranjith",salary:20000,role:"software"}

        // const updatedData=[...this.state.employeeData,newData]

        // this.setState({
        //     employeeData:updatedData
        // })
        const name=["Ranjith","Tulasi","Sukumar","Manoj","Sampath","Deekshith"]
        const roles=["Front-end Developer","Back-End Developer","React-Developer","Java-Developer","Python-Developer"]
        const updatedNames=name[Math.floor(Math.random()*name.length)]
        const updatedRoles=roles[Math.floor(Math.random()*roles.length)]
        const updatedSalary=Math.floor(Math.random()*5000)+1000;

        const newData={
            name:updatedNames,
            salary:updatedSalary,
            role:updatedRoles
        }

        const newData1=[...this.state.employeeData,newData]
        //newData data will be stored in the (push into) the employeeData array

        this.setState({
            employeeData:newData1  
            //new data will updated in the employeeData
        })
    }
    removeHandler=(index)=>{

        //Need to delete the Cards
        const filterdData=this.state.employeeData.filter((_,id)=>id!==index)
        this.setState({
            employeeData:filterdData
        })
    }
    render(){
        return(
            <>
<Button variant="primary" onClick={this.clickHandler}>Click Here to Add Card</Button>
<div className="container mt-5">
<div className="row">
            {
                this.state.employeeData.length>0?
                this.state.employeeData.map((eachEmployee,index)=>{
                    return(
    <>
        <div className="col-sm-3">
        <CustomRectangleCard title={`Name:${eachEmployee.name}`} ind={index} text={`Salary:${eachEmployee.salary}`} roles={`Role:${eachEmployee.role}`} removeHandler={this.removeHandler} />
        </div>
    </>
                    )
                })
                :
                <h3>NO Cards Found</h3>
            }
            </div>
  
        </div>
            </>
        )
    }
}

export default CardAddition;