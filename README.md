

HOC in react:(Higher order component)


HOC is a pattern in react where a function takes the component as an argument and returns the enhnaced component


Using this pattern we can reuse the component the component functionality with out writing multiple times


withCounter(component)


syntax:

const withCounter=(Component)=>{
    return()=>{
        return<Component state={0} handler={increment}>
    }
}

withCOunter is a function which component which returns the enhanced component which extra features (state,handler)by the props






2nd scenarioes:

const withProfile=(Component)=>{
    return()=>{
        const [profiledata,setProfiledata]=useState({})
        useEffect(()=>{
            //api
        },[])
        return <Component profile={profileData}>
    }
}

3rd:


React.memo(HomeScrren)