import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'applied',
        element:<AppliedJobs/>,
        loader:()=> fetch('../jobdata.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails/>,
        loader: ()=>fetch ('../jobdata.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

