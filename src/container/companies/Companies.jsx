import './companies.css'
import { useEffect } from 'react'
import netflix from '../../assets/netflix.webp'
import spotify from '../../assets/spotify.webp'
import dropboxlogo from '../../assets/dropboxlogo.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Companies = () => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='companies'>
      <div className='companies-container' data-aos="fade">
        <img src={dropboxlogo} alt="dropbox" />
        <img src={netflix} alt="netflix" />
        <img src={spotify} alt="spotify" />
      </div>
    </div>
  )
}

export default Companies
