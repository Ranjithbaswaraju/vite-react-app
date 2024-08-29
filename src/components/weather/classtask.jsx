import { Component } from "react"
import axios from "axios";

import TableComponent from "../table/table";
class Home extends Component{

state={
    products:[],
    active:false
}

componentDidMount(){
    this.fetchData()
}


fetchData=async()=>{
    const {status,data}=await axios.get('https://fakestoreapi.com/products')
    if(status===200){
        this.setState({
            products:data
        })
    }

}

homeFunction=()=>{
    this.setState((prevState)=>({
        active:!prevState.active
    }))
}



AddHandler = ()=>{
    const myObject = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }

    this.setState((prevState)=>({
        products:[myObject, ...prevState.products]
    }))
}

    render(){
        return(

        <>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiobMoYG-qaVV90YWtLKBapjVkmObxsJOlxw&s" style={{height:'100px', width:'100px' }}/></div>
                <div><h1>Fake Store</h1></div>
                <div><img src='https://i.pinimg.com/564x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg' style={{height:'100px', width:'100px'}}/></div>
                
            </div>
            <div style={{display:'flex', justifyContent:'space-between' }}>
 
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around', // Add this line
      height: '600px',
      width:'200px',
      backgroundColor: 'aqua',
      
      
    }}
  >
    <button onClick={this.AddHandler}>ADD</button>
    <button onClick={this.homeFunction}>HOME</button>
    <button>ABOUT</button>
    <button>CONTACT</button>
  </div>

  {
    this.state.active && (
        <div style={{ overflow: 'scroll', height: '600px', width: 'calc(100% - 220px)' }}>
            <TableComponent products={this.state.products} />
        </div>
  
    )
  }
   
  </div>
            
            </>
            
        )

    }
}
export default Home;