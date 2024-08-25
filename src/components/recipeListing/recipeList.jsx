import { Component } from 'react';
import CustomDNALoader from '../Loader/loader';
import CustomList from '../list/custom-list';
import { SecondaryHeading } from '../../header/header';
import axios from 'axios';



class RecipeList extends Component{


    state={
        recipes:[],
        loading:true,
        error:false
    }
    componentDidMount(){
        //I can call the server to fetch data
        this.fetchData();
    }

    fetchData=async()=>{
        const {status,data}=await axios.get('https://dummyjson.com/recipes')
        if(status===200){
            this.setState({
                recipes:data.recipes,
                loading:false
            })
        }
    }

    render(){
        return(
            <>
            <h2>Prodduct List</h2>
            {/* ACCESING THE DATA and binding data form empty array */}

            {
                this.state.loading?<CustomDNALoader/>:
                <><h2>Data presnt</h2>

                {
                
                    this.state.recipes.map(eachRecipe=>{
                        return(
                            <div key={eachRecipe.id}>
                                <h3>{eachRecipe.name}</h3>
                                <img src={eachRecipe.image}  height={100}
                                width={100}  alt={eachRecipe.name}/>
                                <SecondaryHeading heading={`Ingredients for ${eachRecipe.name}`}/>
                                <CustomList list={eachRecipe.ingredients}/>
                                <SecondaryHeading heading={`Instructions for ${eachRecipe.name}`}/>
                                <CustomList list={eachRecipe.instructions}/>
                            </div>
                        )
                    })
                }          
            </>
           

            
            }

            </>
        )
    }
}


export default RecipeList;



// import { Component } from 'react';
// import CustomDNALoader from '../Loader/loader';
// import CustomList from '../list/custom-list';
// import { SecondaryHeading } from '../../header/header';
// import axios from 'axios';
// import FirstComponent from '../bootstrap/first-component';

// class RecipeList extends Component {
//     state = {
//         recipes: [],
//         loading: true,
//         error: false
//     }

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = async () => {
//         const { status, data } = await axios.get('https://dummyjson.com/recipes');
//         if (status === 200) {
//             this.setState({
//                 recipes: data.recipes,
//                 loading: false
//             });
//         }
//     }

//     render() {
//         return (
//             <>
//                 <h2>Product List</h2>
//                 {
//                     this.state.loading ? <CustomDNALoader /> :
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                         {this.state.recipes.map(eachRecipe => (
//                             <div key={eachRecipe.id} style={{
//                                 border: '1px solid #ccc',
//                                 borderRadius: '8px',
//                                 padding: '16px',
//                                 width: '300px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//                             }}>
//                                 <h3>{eachRecipe.name}</h3>
//                                 <img 
//                                     src={eachRecipe.image} 
//                                     height={100} 
//                                     width={100} 
//                                     alt={eachRecipe.name} 
//                                     style={{ borderRadius: '4px', marginBottom: '12px' }}
//                                 />
//                                 <SecondaryHeading heading={`Ingredients`} />
//                                 <CustomList list={eachRecipe.ingredients} />
//                                 <SecondaryHeading heading={`Instructions`} />
//                                 <CustomList list={eachRecipe.instructions} />
//                             </div>
//                         ))}
//                     </div>
//                 }
//             </>
//         );
//     }
// }

// export default RecipeList;
