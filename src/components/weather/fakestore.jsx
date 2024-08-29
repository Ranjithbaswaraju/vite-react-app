import axios from "axios";
import { Component } from "react";
import BasicExample from "./wather-card";

class Fake extends Component{
    state={
        products:[],
        selectedProduct: null ,
        id:''
    }
    componentDidMount(){
        this.FetchData()
    }
    FetchData=async()=>{
    const {status,data}=await axios.get('https://fakestoreapi.com/products')
    
    if(status==200){
        this.setState({
            products:data,  
        })
    }
    }
    handleCardClick = (product) => {
        this.setState({
            selectedProduct: product,
        });
    };
    render(){
        return(
        <>

<div style={{ display: 'flex', }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' ,width:'300px'}}>
        {this.state.products.map(each => (
            <div key={each.id} style={{ width: '300px' }}>
                <BasicExample
                    title={each.title}
                    image={each.image}
                    description={each.description}
                    onClick={() => this.handleCardClick(each)}
                />
            </div>
        ))}
    </div>

    {this.state.selectedProduct && (
        <div style={{ width: '300px', marginLeft: '400px',marginTop:'40px' }}>
            <BasicExample
                title={this.state.selectedProduct.title}
                image={this.state.selectedProduct.image}
                description={this.state.selectedProduct.description}
            />
        </div>
    )}
</div>

        </>
        
        )
    }
}

export default Fake;