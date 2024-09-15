import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationStack from './navigations/navigation-stack.jsx';
import { BrowserRouter } from 'react-router-dom';
import UseMemo from './components/hooks/useMemo/useMemo.jsx';
import UseMemoEx2 from './components/hooks/useMemo/useMemoEx.jsx';
import UseMemoEx3 from './components/hooks/container/container.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <UseMemo/> */}
    {/* <UseMemoEx2/> */}
    <UseMemoEx3/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
