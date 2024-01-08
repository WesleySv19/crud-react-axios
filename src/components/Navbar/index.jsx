import { Link } from "react-router-dom"
import './Navbar.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"


const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <nav className='navbar'>
      <h2>
        <Link to='/'>Blog</Link>
      </h2>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/new' className="newBtn">Novo Post</Link>
        </li>
      </ul>

      <button className="newBtn" onClick={toggleTheme}>Mudar tema</button>
    </nav>
  )
}

export default Navbar