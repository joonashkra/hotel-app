
import { createRoot } from 'react-dom/client'
import './index.css'
import './pages/pages.css'
import './components/general/general.css'
import './components/rooms/rooms.css'
import './components/bookings/bookings.css'
import RoomsPage from './pages/RoomsPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RoomPage from './pages/RoomPage.jsx';
import Wrapper from './components/general/Wrapper.jsx'
import UpdateRoomPage from './pages/UpdateRoomPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProtectedRoute from './components/general/ProtectedRoute.jsx';
import UpdateBookingPage from './pages/UpdateBookingPage.jsx';
import BookingsPage from './pages/BookingsPage.jsx'
import StaffSignupPage from './pages/StaffSignupPage.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          path: '/',
          element: (<RoomsPage />)
        },
        {
          path: "/rooms/:id",
          element: <RoomPage />
        },
        {
          path: '/login',
          element: (<LoginPage />)
        },
        {
          path: '/bookings',
          element: (<ProtectedRoute roles={['Admin', 'Staff']}><BookingsPage /></ProtectedRoute>)
        },
        {
          path: '/bookings/:id',
          element: (<ProtectedRoute roles={['Admin', 'Staff']}><UpdateBookingPage /></ProtectedRoute>)
        },
        {
          path: '/rooms',
          element: (<ProtectedRoute roles={['Admin', 'Staff']}><RoomsPage /></ProtectedRoute>)
        },
        {
          path: '/rooms/update/:id',
          element: (<ProtectedRoute roles={['Admin']}><UpdateRoomPage /></ProtectedRoute>)
        },
        {
          path: '/staff/new',
          element: (<ProtectedRoute roles={['Admin']}><StaffSignupPage /></ProtectedRoute>)
        }
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
