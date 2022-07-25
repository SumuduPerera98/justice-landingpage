import React from 'react'
import Featurebox from './Featurebox'
import './LandingPage.css'
import f1 from '../images/1.svg'
import f2 from '../images/2.svg'
import f3 from '../images/3.svg'
import f4 from '../images/4.svg'

const Features = () => {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={f1} title="Weight Lifting"/>
            <Featurebox image={f2} title="Specific Muscle"/>
            <Featurebox image={f3} title="Flex Your Muscle"/>
            <Featurebox image={f4} title="Cardio Exercise"/>
        </div>
    </div>
  )
}

export default Features