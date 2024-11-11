
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ManagementPage from './pages/ManagementPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Room from './components/Room.jsx';
import NavBarWrapper from './components/general/NavBarWrapper'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: '/',
        element: (<HomePage />)
      },
      {
        path: "/rooms/:id",
        element: <Room />
      },
      {
        path: '/management',
        element: (<ManagementPage />)
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
