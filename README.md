useEffect:useeffect is a react functional hook which is used to cause side effects with in the componennt

side effects:asybc actions-dom manipulations,event listeners,data fetching,third party subscriptions

useEffect is replacement of 3 life cycle methods in class components

1.ComponentDidMount
2.componentDidUpdate
3.componentWllUnmount


syntax:useEffect(()=>{},[])

useEffect will accepts the callback and array

note:useEffect behaviour wll depend on 2 argument which is an array

case1:if array is empty,useEffct will behave like componentDidMount.
it will run only once in a life cycle

useEffect(()=>{},[])

2.if array is filled with values ,depending upon value chnages useEffect will behave like a componentDidUpdate.

useEffect(()=>{},[value1,value2.....])


[value1,value2.....]if values were changing useEffect will re-reder(re-exceute)

this array will call it as the dependcey array


3.No dependecy array

useEffect(()=>{})
if no dependcy array,component will keep on re-rendering when ever state or prop chnages it might also leads to infinite rendering of component

case4:
if useEffect callback function returns the function,with in returnded function we can prevent memory leaks if the component --componenntwillUnmount

useeEffect(()=>{
    return()=>{
        //prevent the memory leaks
    }
},[])


tasks:
1.5 examples for useState,useRef and useEffect
2.based on button events,show the corresponding data in tables

