In this disccused about the axios method the main purpose of this to the overcome the problems of fecth in react ..The following are the some the limitations of the fecth method:

Fetch method drawbacks:
1.There is no automatic json conversion
2.status codes not provided.
3.Intercepting of request and response is not provided by fetch method

axios :Axios is a third party package for making http calls iin a efficient manner

To install axis:

npm i axios

USAGE:
 import axios froom "axios"

 axios.get(URL).then(response=>console.log(response))


 USING async and await:

 fetchData=async()=>{
    const finalData=await axios.get(URL)
    console.log(finalData)
 }