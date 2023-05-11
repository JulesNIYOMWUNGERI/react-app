import React from 'react';
import { Route,Routes } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import Form from './components/Form';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Layout = () => {
    return( 
    <>
    <Navbar/>
    <Outlet/>
    </>
    );
};

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Layout/>,
        children: [
          {
            path:"/home",
            element:<Home/>
          }
        ]
    },
    {
        path: "/",
        element: <Form/>
      },
])

const App = () => {
  return (
    <div className='bg-green-50 flex flex-col h-auto'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
