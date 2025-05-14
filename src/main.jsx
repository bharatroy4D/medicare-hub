import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import all component
import Root from './Layout/Root.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import Services from './Components/Services/Services.jsx';
import OurDoctor from './Components/OurDoctor/OurDoctor.jsx';
import AppointmentForm from './Components/Pages/Home/Appointment/Appointment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/doctor',
        element:<OurDoctor/>
      },
      {
        path:'/appointment',
        element:<AppointmentForm/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
