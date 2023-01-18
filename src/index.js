import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ParamsExample from './pages/ParamsExample';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404</p>,
    children: [
      {
        path: "/page/:id",
        element: <ParamsExample/>,
      },
    ],
  },
  {
    path: "/page2",
    element: <h1>Page without React logo</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


