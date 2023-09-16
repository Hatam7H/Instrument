import './intro.css'
import { useEffect } from 'react'
import intro from '../../assets/intro.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='intro'>
      <video className='intro-video' data-aos="fade" src={intro} type="video/mp4" loop muted autoPlay></video>
    </div>
  )
}

export default Intro
