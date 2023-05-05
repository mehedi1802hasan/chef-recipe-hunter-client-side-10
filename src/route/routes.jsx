import React from 'react';

import Main from '../layouts/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import ChefCards from '../Home/ChefCards';
import CCard from '../Home/Home/CCard';
import Secondlayout from '../layouts/secondlayout/Secondlayout';
import Login from '../Home/Home/Login';
import Registration from '../Home/Home/Registration';
import Error from '../Error/Error';
import LoginLayout from './loginlayout/LoginLayout';
import Blog from '../Home/Home/blog';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      
      ]
    },{
     path:"/",
     element:<Secondlayout></Secondlayout>,
     children:[
     
      {
          path:'/chefs/:id',
          element:<CCard></CCard>
      }
     ]
     
    },
    {
     path:'/',
     element:<LoginLayout></LoginLayout>,
     children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
     ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);
  
export default router;