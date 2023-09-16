import './header.css'
import { BsArrowRight } from 'react-icons/bs'

const Header = () => {
  return (
    <div id='what' className='what'>
        <h1 className='what-container_heading'>
          Build Grow Serve
        </h1>
        <p className='what-container_paragraph'>
          We are investing $3 milion over the next three years in our <br />
          Build|Grow|Serve program, created to support nad empower Black nad <br />
          underrepresented commmubities.
        </p>
        <div className='what-container_btn'>
          <button className='section-btn'>Learn More {<BsArrowRight size={12}/>}</button>
        </div>
    </div>
  )
}

export default Header