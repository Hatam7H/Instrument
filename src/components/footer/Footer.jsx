import './footer.css'
import { BsArrowRight } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='footer-links-sec1'>
          <a href='#what'>HOME</a>
          <a href='#what'>WHAT WE DO</a>
          <a href='#'>WORK</a>
          <a href='#who'>WHO WE ARE</a>
          <a href='#'>ARTICLE</a>
        </div>
        <div className='footer-links-sec2'>
          <a href='#being'>BEING HERE</a>
          <a href='#carrers'>CARRERS</a> 
          <a href='#'>CONTACT</a> 
          <a href='#'>PRIVACY</a>   
        </div>
      </div>
      <div className='footer-medias'>
        <button className='footer-medias-btn'>NEWSLETTER   {<BsArrowRight size={14} color='white'/>} </button>
        <div className='footer-medias-icon'>
          <BsInstagram color='white' size={20} cursor='pointer'/>
          <BsTwitter color='white' size={20} cursor='pointer'/>
          <BsLinkedin color='white' size={20} cursor='pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
