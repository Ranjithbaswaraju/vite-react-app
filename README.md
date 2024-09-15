

useCallback:

useCallback is a hook in react functional Components which is used tio memorize the function, without recalculating the functions when same inputs were given


syntax:useCallback(()=>{},[])

using useCallback we can prevent the children re-rendering.

Custom Hooks:

custom Hooks is used for common functionality in the component without writing in multiple components

custom hooks were designed using existing hooks in react 
custom hooks should also follow the rules of hooks  


scernario:design a hook for data fetching

ex:useFetch,useAxios

custom-hooks are reusable functions

const[data,useData]=useState([])
useEffect(()=>{},[])

