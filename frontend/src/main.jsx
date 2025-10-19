import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'

import {Provider} from "react-redux"


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Product from './pages/Product.jsx';


const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
          <Route index={true} path='/' element={<Home/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/Product/:id' element={<Product/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <RouterProvider router={route}>
        <App/>
  </RouterProvider>
  </Provider>
)





