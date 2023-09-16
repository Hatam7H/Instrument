import './footers.css'
import { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Footer } from '../../components'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footers = () => {
  
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, []) 

  return (
    <div id='being' className='footers'>
      <div className='footers-info' data-aos="fade">
        <h2 className='section-heading'>We'd love to work with you and <br /> your team</h2>
        <button className='section-btn'>Get in toch {<BsArrowRight size={12}/>}</button>
      </div>
      <div className='instrumwnt__footers-links'>
        <Footer />
      </div>
    </div>
  )
}

export default Footers
