
import { Component } from "react";
import axios from "axios";
import CustomDNALoader from "../Loader/loader";
import Component1 from "../bootstrap/card"

class Filter extends Component{

    state={
        product:[],
        category:[],
        all:[],
        loading:true
       
        
    }
componentDidMount(){
    this.fetchData();
    this.fecthCategory()

}
    fetchData=async()=>{
        const {data,status}=await axios.get('https://fakestoreapi.com/products')
        if(status===200){
            this.setState({
                product:data,
                all:data,
                loading:false
            })
        }
        
    }
    fecthCategory=async()=>{
        const {data,status}=await axios.get('https://fakestoreapi.com/products/categories')
        if(status===200){
            this.setState({
                category:data,
                
                loading:false
                
            })
        }
        
    }
    filteredEvent=async(eachCategory)=>{
        if(eachCategory==="all"){
            this.setState({
                product:this.state.all
                //It is for the when clicked on the all button button again all items will be come
                

            })
        }
        else{
        const {data,status}=await axios.get(`https://fakestoreapi.com/products/category/${eachCategory}`)
        if(status===200){
            this.setState({
                product:data,
                loading:false
            })
        }
    }
    }
    
    render(){
        return(
            <>
            <button
                        style={{ backgroundColor: 'aqua',  borderRadius: '5px' }}
                        onClick={() => { this.filteredEvent('all') }}>
                        All
                    </button>

            {
                this.state.category.map(eachCategory=>{
                    return(
                        <>
                        <button style={{position:'relative',left:'35%',backgroundColor:'aqua'}} onClick={()=>{this.filteredEvent(eachCategory)}}>{eachCategory}</button>
                        </>
                        
                    )
                })
            }
                {
                    this.state.loading?<CustomDNALoader/>:
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'10px'}} >
                        {
                            this.state.product.map(each=>{
                                return(
                                    <>
                                    <Component1  title={each.title} image={each.image} category1={each.category}text={each.description} price={each.price}/>
                                    
                                    </>
                                )
                            })
                        }
                    </div>
                }
            </>
        )
    }
}
export default Filter;