
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ManagementPage from './pages/ManagementPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Room from './components/rooms/Room.jsx';
import Wrapper from './components/general/Wrapper.jsx'
import UpdateRoom from './components/rooms/UpdateRoom.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProtectedRoute from './components/general/ProtectedRoute.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper />,
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
          element: (<ProtectedRoute><ManagementPage /></ProtectedRoute>)
        },
        {
          path: '/management/rooms/:id',
          element: (<ProtectedRoute><UpdateRoom /></ProtectedRoute>)
        },
        {
          path: '/login',
          element: (<LoginPage />)
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
