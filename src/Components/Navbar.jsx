import React, {useState} from 'react'
import './LandingPage.css'
import logo from '../images/logo.png'
import { Link } from 'react-scroll';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground =()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground)

  return (
    <nav className={nav ? 'nav active':'nav'}>
        <Link to='#' className='logo'>
            <img src={logo} alt="" />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="#">Header</Link></li>
            <li><Link to="#">Features</Link></li>
            <li><Link to="#">Offer</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar