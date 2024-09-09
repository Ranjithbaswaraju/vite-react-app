 




 React-router-dom--To provide navigation in react app ,we don't use anchor tags instead we have an dedicated package/library called React-router-dom

command to install react-router-dom:
npm i react-router-dom


 Types of navigations:

 1.Static navigations
 2.dynamic navigations
 3.nested navigations

http://localhost:5173/--Base URL

1.Homescreen - http://localhost:5173/
2.AboutScreen - http://localhost:5173/about
3.Settingscreen - http://localhost:5173/settings

4.Contact - http://localhost:5173/contact

8.ProductDetailsscreen-http://localhost:5173/product/1
http://localhost:5173/product/2


<Route path="/" element={Homescreen}/> 

path and elements are props



In react router dom,they are 2 ways to navigate to a screen

1.link component provided by react router dom
2.useNavigate hook provided by react router dom --programitical navigation




Tasks:
1.Repeat the class
2.Fill the all the screens with content-login,registration,about
3.why not to use the anchor tags in react
4.Difference between staic and dynamic navigations
5.Design a side bar and provide navigations