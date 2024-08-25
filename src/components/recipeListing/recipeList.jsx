import { Component } from 'react';
import CustomDNALoader from '../Loader/loader';
import CustomList from '../list/custom-list';
import { SecondaryHeading } from '../../header/header';



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
            try{
            const data=await fetch('https://dummyjson.com/recipes')
            const {recipes}=await data.json()

            // console.log(finalData.recipes)
            this.setState({
                recipes:recipes,
                loading:false
            })
        }catch(err){
            console.log(err)
            this.setState({
                error:true
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