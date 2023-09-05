import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import "./styles/styles.scss"

import Root from "./routes/root.tsx";
import About from "./routes/about/about.tsx";
import Home from "./routes/home/home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "about",
                element: <About/>,
            },
        ]
    },
]);

let $loadingState = document.getElementById(`loading-state`);
$loadingState?.classList.add("hide")

setTimeout(() => $loadingState?.remove(), 300)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
