import './navbar.css'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>INSTRUMENT</h1>
      <div className='navbar-link'>
        <a href='#what'>WHAT WE DO</a>
        <a href='#who'>WHO WE ARE</a>
        <a href='#being'>BEING HERE</a>
        <a href='#carrers'>CARRERS</a>
      </div> 
      <div className='navbar-icon'>
        <RiMenu3Line cursor='pointer' color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='navbar-sm'>
            <div className='navbar-logo-sm'>
              <h1 className='navbar-logo'>INSTRUMENT</h1>
              <RiCloseLine cursor='pointer' color='#fff' size={32} onClick={() => setToggleMenu(false)}/>
            </div>
            <div className='navbar-sm-link'>
              <a href='#what' onClick={() => setToggleMenu(false)}>WHAT WE DO</a>
              <a href='#who' onClick={() => setToggleMenu(false)}>WHO WE ARE</a>
              <a href='#being' onClick={() => setToggleMenu(false)}>BEING HERE</a>
              <a href='#carrers' onClick={() => setToggleMenu(false)}>CARRERS</a>
            </div>
          </div>
        )}
      </div>       

    </nav>
  )
}

export default Navbar
