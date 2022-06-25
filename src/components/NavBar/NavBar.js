import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
        <Link to='/'>
         
          <div className='logo'>
          <img src="https://d2r9epyceweg5n.cloudfront.net/stores/002/235/664/themes/common/logo-1746397648-1655917049-380700805929b8b64cb60cd18bfb41cc1655917049-480-0.png?0" alt='cart' className='CartImg'/>
          </div>
         
         
           
        </Link>
        <div className="Categories">
          <NavLink to='/category/tablero' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablero</NavLink>
          <NavLink to='/category/pedestal' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pedestal</NavLink>
          <NavLink to='/category/retro' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Retro</NavLink>
          <NavLink to='/category/bartop' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bartop</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar