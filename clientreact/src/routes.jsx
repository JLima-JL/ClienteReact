import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Alunos from'./pages/Alunos';

const router = createBrowserRouter([
    {   path: "/",
        element:<Login/>
    },
    {
        path:'/alunos',
        element:<Alunos/>
    }
]);

export default function Routes(){
    return(
        <RouterProvider router={router}/>
    )
}