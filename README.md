In this discussing about the state management



useState-local state management

Types of management:
1.local state management:--creating and managing data with in component(useState)
2.global state management:--creating and managing can be through out the application

global state management 3 techniques:

1.props --prop drilling --passing data to the final component through out every level of component tree,even through intermediate components not using the data

drawback:

Why not to use the prop drilling:
refer to thhis:
https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/
1.code complexity
2.Reduced Maintainability
3.Performance Overhead
4.Decreased Component Reusability
5.Increased Development Time


To overcome this problem we should use the Context Api:


2.context api:It is the way to manage the state in react application globally by avoiding prop drilling

steps to create context api in react app:
1.identify the set of components that needs to share the data --whole app
2.create some data ex:username:" ranjith"--react will provide the createContext method for the creating the context.
3.wrap the created context using provider and pass value prop for the wrapped provider
4.To consume the data we use hook called useContext,it accepts the createdContext method being used in app

3.Redux :third party package

Tasks:
1.Repeat the class
2.Global counter using the useContext and useState
3.what is prop drilling and drwabacks
4.try context with different data types(like string,object,array,boolean)
5.Implement darak theme in react app using context api