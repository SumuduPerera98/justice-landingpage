import React from 'react'
import Featurebox from './Featurebox'
import './LandingPage.css'
import f1 from '../images/1.jpg'
import f2 from '../images/2.jpg'
import f3 from '../images/3.jpg'
import f4 from '../images/4.jpg'

const Features = () => {
  return (
    <div id='features'>
        <h1>CATEGORIES</h1>
        <div className='a-container'>
            <Featurebox image={f1} title="TOPS"/>
            <Featurebox image={f2} title="DRESSES"/>
            <Featurebox image={f3} title="TROUSERS"/>
            <Featurebox image={f4} title="T-SHIRTS"/>
        </div>
    </div>
  )
}

export default Features