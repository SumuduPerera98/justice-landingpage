import React from 'react'
import './LandingPage.css'

const Header = () => {
  return (
    <div id='main'>
        <div className='name'>
            <h2>LIFE IS NOT PERFECT BUT YOUR</h2>
            <h1><span>OUTFIT</span> CAN BE</h1>
            {/* <p className='details'>Build Your Body And Fitness With Professional Touch</p> */}
            <div className='header-btns'>
                <a href="#" className='header-btn'>SIGN UP</a>
            </div>
        </div>
    </div>
  )
}

export default Header