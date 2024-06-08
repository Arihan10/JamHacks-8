import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// routes
import Root from "./routes/Root"
import StudentProfile from './routes/StudentProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "profile",
    element: <StudentProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
