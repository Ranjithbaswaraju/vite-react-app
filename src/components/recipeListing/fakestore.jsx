import axios from "axios";
import { Component } from "react";
import CustomDNALoader from "../Loader/loader";
import InstagramHert from "../heart/instagram-heart";


class Fakestore extends Component{
    state={
        products:[],
        loading:true,
        error:false,
        bulbImage:'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png',
        clickedBulbId: null,
        // bulbClicked:false

    }
    componentDidMount(){
        this.fetchData()
    }

    bulbHandler=()=>{
        this.setState(preventBulb=>({
            bulbImage:preventBulb.bulbClicked
            ?'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png':'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png',
            
            bulbClicked: !preventBulb.bulbClicked
        }))
    }
    // bulbHandler = (id) => {
    //     this.setState(prevState => ({
    //         clickedBulbId: prevState.clickedBulbId === id ? null : id
    //     }));
    // };

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
            
            <h1 style={{
                textAlign:'center'
            }}>FAKE STORE PRODUCTS</h1>
            
            
            {
                this.state.loading?<CustomDNALoader/>:
                <><div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' ,justifyContent:'center'}}>
                    {
                        this.state.products.map(eachItem=>{
                            return(
                                <div key={eachItem.id} style={{
                                    
                                    textAlign:'center',
                                    border: '2px solid red',
                                    width:'350px',
                                    position:'relative',
                                    borderRadius:'10px',
                                    boxShadow:'5px 5px 5px red'
                                }}>
                                    <h5 style={{
                                       display: '-webkit-box',
                                       WebkitLineClamp: 2,
                                       WebkitBoxOrient: 'vertical',
                                       overflow: 'hidden',
                                       textOverflow: 'ellipsis',
                                       height:'50px'
                                       }}>
                                    {eachItem.title}</h5>
                                    <div>
                                    <img src={eachItem.image}
                                    style={{
                                        height:'150px',
                                        width:'200px'

                                    }}/>
                                    
                                    </div>
                                    <b>{`Category: ${eachItem.category}`}</b><br/>
                                    <b>{`Price: ${eachItem.price}`}</b>

                                    <p style={{
                                        display:'-webkit-box',
                                        WebkitLineClamp:4,
                                        webkitBoxOrient:'vertical',
                                        overflow:'hidden',
                                        textOverflow: 'ellipsis',
                                        height:'100px'
                                    }}>
                                        {eachItem.description}</p>
                                    <div style={{
                                        display:'flex',
                                        height:'100px',
                                        justifyContent:'space-around',
                                        alignItems:'center',
                                        boxSizing:'border-box'


                                    }}>
                                    <button style={{ 
                                        width:'100px',
                                        height:'40%',
                                        backgroundColor:'yellow',
                                       
                                    }}>Buy Now
                                    </button>
                                    <img src={this.state.bulbImage} onClick={this.bulbHandler} style={{height:'100px',width:'100px'}}/>

                                    {/* <img src={this.state.clickedBulbId === eachItem.id
                                                ? 'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png'
                                                : 'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png'}
                                                onClick={() => this.bulbHandler(eachItem.id)}
                                                style={{ height: '100px', width: '100px' }} /> */}
                            
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                     </div>
                </>
                


            }
            
        </>
        )
    }
}

export default Fakestore;