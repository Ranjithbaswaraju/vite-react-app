import axios from "axios";
import { Component } from 'react';
import style from "./fake.module.css";
import CustomDNALoader from "../Loader/loader";





class FakeTable extends Component{
    
    state={
        products:[],
        loading:true,
        error:false
    }

    componentDidMount(){
        this.fetchData()
    }

     fetchData=async()=>{
        const {status,data}=await axios.get('https://fakestoreapi.com/products')
        if(status===200){
            this.setState({
                products:data,
                loading:false
            })
        }
    }


    render(){
        return(
            <>
                {
                    this.state.loading?<CustomDNALoader/>:
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(eachItem=>(
                                <>
                                <tr key={eachItem.id}>
                                    <td >{eachItem.id}</td>
                                    <td>{eachItem.title}</td>
                                    <td>{eachItem.price}</td>
                                    <td>{eachItem.description}</td>
                                    <td>{eachItem.category}</td>
                                    <td>
                                        <img 
                                            src={eachItem.image} 
                                            alt={eachItem.title} 
                                            style={{ width: "50px", height: "50px", borderRadius: "5px" }} 
                                        />
                                    </td>
                                  </tr>
                                </>   
                                ))
                            }
                        </tbody>
                    </table>
                    </>
                }
            </>
        )
    }
}
export default FakeTable; 