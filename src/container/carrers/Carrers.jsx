import './carrers.css'
import { useEffect } from 'react'
import Article from '../../components/article/Article'
import dropbox from '../../assets/dropbox.webp'
import emas from '../../assets/emas.webp'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Carrers = () => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div id='carrers' className='carrers'>
      <h2 className='section-heading' data-aos="fade">Explore some of our most <br />recent work</h2>
      <div className='carrers-article' data-aos="fade">
        <Article imgUrl={emas} title='Emas Institute' text="Ray and Charles Emas laid the foundation for modern design and created work that has transcended time." />
        <Article imgUrl={dropbox} title='Dropbox' text="To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving'" />
      </div>
    </div>
  )
}

export default Carrers
