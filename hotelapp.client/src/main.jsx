
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ManagementPage from './pages/ManagementPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Room from './components/rooms/Room.jsx';
import NavBarWrapper from './components/general/NavBarWrapper'
import UpdateRoom from './components/rooms/UpdateRoom.jsx';

const router = createBrowserRouter(
  [
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
        {
          path: '/management/rooms/:id',
          element: (<UpdateRoom />)
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    }
  }
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
)
