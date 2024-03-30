import React from 'react'
import './App.css'
import Navbar from './components/Navbar/index'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
