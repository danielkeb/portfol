// eslint-disable-next-line no-unused-vars
import React from 'react'
import CV from '../../assets/cv.pdf'
//import MyCv from '../../assets/MCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA