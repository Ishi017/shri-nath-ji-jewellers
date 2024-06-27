import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import ShopbyCategory from './Pages/ShopbyCategory'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><div><App/></div>
    <div className="content-container"> <Shop/> </div></>
  },
  {
    path:"/login",
    element: <><div><App/></div><div className="content-container"> <Login/></div></>
    
  },
  {
    path:"/cart",
    element:<><App/> <div className="content-container"><Cart/></div></>
  },
  {
    path:"/pickcategory/:category",
    element:<><App/><div className="content-container"><ShopbyCategory/></div></>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   
    {/* <App/> */}
    <RouterProvider router={router} />

  </React.StrictMode>
)
