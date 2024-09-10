import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationStack from './navigations/navigation-stack.jsx';
import { BrowserRouter } from 'react-router-dom';
import UseApp from './components/hooks/useReducer/useReducer1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <NavigationStack/>
  //   </BrowserRouter>
  //   {/* <UseApp/> */}
  // </React.StrictMode>,
  <App/>
)
