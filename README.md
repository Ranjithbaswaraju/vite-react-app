null also considered as the false part 
<User isAdmin={null}/>   

SWITCH CASE EXAMPLE:

function App(){
    const type="ADMIN"
    switch(type){
        case "ADMIN"
        return <User text="ADMIN"/>
        case "GUEST"
        return <User text="Guest"/>
        case "USER"
        return <User text="User">
        defualt:
        return <User/>
    }
}
export defualt App:

In User page

const User=({text})=>{
    <>
    <h3>Welcome {text}</h3>
    </>

}
export default User;

hello is