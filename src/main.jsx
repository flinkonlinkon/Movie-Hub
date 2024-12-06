import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Card from './Components/Card.jsx';
import Details from './Components/Details.jsx';
import Login from './Components/Login.jsx';
import ForgerPass from './Components/ForgerPass.jsx';
import Singup from './Components/Singup.jsx';
import Myprofile from './Components/Myprofile.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import ContextPro from './Components/ContextPro.jsx';
import AllMovies from './Components/AllMovies.jsx';
import MyFavorites from './Components/MyFavorites.jsx';
import AddMovies from './Components/AddMovies.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
        children:[
          {
            path:'/',
            element:<Card></Card>
          }
        ]

      },
      {
        path:'/allmovies',
        element:<AllMovies></AllMovies>
      },
     
      {
        path:'/details',
        element:<Details></Details>

      }
      

    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/forgetpass',
    element:<ForgerPass></ForgerPass>
  },
  {
    path:'/singup',
    element:<Singup></Singup>
  },
  {
    path:'myprofile',
    element:<PrivateRoute>
      
      <Myprofile></Myprofile>

      
      
    </PrivateRoute>

  },
  {
    path:'addmovies',
    element:<PrivateRoute>
      <AddMovies></AddMovies>
    </PrivateRoute>
  },
  {
    path:'fmovies',
    element:<PrivateRoute>
      <MyFavorites></MyFavorites>
    </PrivateRoute>
  }
  
],{
  basename: import.meta.env.VITE_APP_BASE_NAME,
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    
  
    },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>


    
    <ContextPro>
    <RouterProvider router={router}></RouterProvider>
    </ContextPro>
    
  </StrictMode>,
)