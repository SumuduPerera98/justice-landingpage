import React from 'react'
import './LandingPage.css'
import aboutImage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <h1>ABOUT US</h1>
        <div className='about-image'>
            <img src={aboutImage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatum animi. Distinctio est alias possimus! Excepturi officia in perspiciatis corrupti repudiandae impedit consequuntur et blanditiis obcaecati rerum, ipsum dolor! Perspiciatis.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About