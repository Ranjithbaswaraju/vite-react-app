
In this branch created called the api and How to use about the fetch


syntax:

fetch(URL).then((data)=>data.json()).then(response)=>console.log(response)


const fecthData=async()=>{
    const data=await fetch(URL)
    const finalData=await data.json()

    console.log(finalData)
}


Life Cycle method in class component:
1.Componet did mount:This method in class componentn is used to perfomr the side effects with in the component in the erly phase or page load 

Side effects:fetching data from server,Dom manipulations,Timing events,event in listerners


The main purpose of this used to fecth the data

Note:ComponentDidMount excutes only once in a life cycle.

component is the auto invoke method on page load


React.StrictMode ->This will trigger the app twice the early observation of bugs in the application
 