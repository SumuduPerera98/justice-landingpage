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
    </nav>
  )
}

export default Navbar