import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Career from "./Career";
import Project from "./Project";
import Education from "./Education";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/career',
        element: <Career/>,
    },
    {
        path: '/projects',
        element: <Project/>,
    },
    {
        path: '/education',
        element: <Education/>,
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
