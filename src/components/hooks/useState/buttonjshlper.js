




export const Button=()=>{
    const array=[];
    for(let i=1;i<=100;i++){
        const myObject={
            "id":i,
            "text":`Button ${i}`
        }
        array.push(myObject)
    }
    return array
}
Button()