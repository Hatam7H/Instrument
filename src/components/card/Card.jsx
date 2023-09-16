import './card.css'
import { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = ({ imgUrl, text}) => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div className='card' data-aos="fade">
      <img className='card-img' src={imgUrl} alt="img" />
      <div className='card-container_info'>
        <p className='card-paragraph'>{text}</p>
        <button className='section-btn'>More  {<BsArrowRight size={12}/>}</button>
      </div>
    </div>
  )
}

export default Card
