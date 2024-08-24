import { Component } from "react";
// import FirstComponent from "../bootstrap/first-component";
import CustomRectangleCard from "../bootstrap/custom-card";
import { Button } from "react-bootstrap";


class CardAddition extends Component{
    state={
        employeeData:[]
    }
    clickHandler=()=>{
        //Need to add cards hare
        const newData={name:"ranjith",salary:20000,role:"software"} 

        const updatedData=[...this.state.employeeData,newData]

        this.setState({
            employeeData:updatedData
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
        <CustomRectangleCard title={eachEmployee.name} ind={index} text={eachEmployee.salary} removeHandler={this.removeHandler} />
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