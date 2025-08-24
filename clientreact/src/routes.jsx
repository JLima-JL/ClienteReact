import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Alunos from'./pages/Alunos';
import NovoAluno from'./pages/NovoAluno';

const router = createBrowserRouter([
    {   path: "/",
        element:<Login/>
    },
    {
        path:'/alunos',
        element:<Alunos/>
    },
    {
        path:'/aluno/novo',
        element:<NovoAluno/>
    },
    {
        path:'/aluno/novo/:id',
        element:<NovoAluno/>
    }
]);

export default function Routes(){
    return(
        <RouterProvider router={router}/>
    )
}