import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'


const App = () => {
  const { isLightMode } = useContext(ThemeContext)

  return (
    <div className={isLightMode?'dark_mode':'light_mode'}>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
