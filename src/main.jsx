import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from './context/ThemeContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home/index.jsx'
import NewPost from './routes/NewPost/index.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <Home /> }, { path: "/new", element: <NewPost /> } ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
