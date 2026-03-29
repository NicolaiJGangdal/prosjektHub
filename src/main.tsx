import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Tournament from './pages/Tournament'
import Books from './pages/Books'
import Training from './pages/Training'
import Login from './pages/Login'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Tournament />,
        },
        {
          path: 'books',
          element: <Books />,
        },
        {
          path: 'training',
          element: <Training />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ],
  { basename: '/' },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
