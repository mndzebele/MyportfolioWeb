import React from 'react'
import './Menu.css'
import{GiSkills} from 'react-icons/gi'
import {FcHome,FcAbout, FcReadingEbook, FcVideoProjector, FcBusinessContact} from 'react-icons/fc';
import Profile from '../../images/profile.jpg';
import { Link } from 'react-scroll'
const Menu = ({toggle}) => {
  
  return (
  <>{toggle ?(
    <>
    <div className='navbar-profile-pic'>
    <img src={Profile}alt='profile pic'/>
    </div> 
    <div className='nav-items'>
    <div className='nav-item'>
      <div className='nav-link'>
        <Link to='home'spy={true} smooth={true}offset={-100}duration={100}>
        <FcHome/>
        Home
        </Link>
        </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='about'spy={true} smooth={true}offset={-100}duration={100}>
         <FcAbout/>
         About
        </Link>
       </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='education'spy={true} smooth={true}offset={-100}duration={100}>
         <FcReadingEbook/>Education
        </Link>
        </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='tech'spy={true} smooth={true}offset={-100}duration={100}> 
      <GiSkills/>Tech &Skills
        </Link>
        </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to=''spy={true} smooth={true}offset={-100}duration={100}>
        <FcVideoProjector/>Projects
          </Link>
        </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='contact'spy={true} smooth={true}offset={-100}duration={100}>
         <FcBusinessContact/>contact
        </Link>
       </div>
    </div>
    </div>
    </>
  ) : (
  <>
    <div className='nav-items'>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='home'spy={true} smooth={true}offset={-100}duration={100}>
        <FcHome title='Home'/>
        </Link>
        </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='about'spy={true} smooth={true}offset={-100}duration={100}>
       <FcAbout title='About'/>
        </Link>
       </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='education'spy={true} smooth={true}offset={-100}duration={100}>
          <FcReadingEbook title='Education'/>
        </Link>
       </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='tech'spy={true} smooth={true}offset={-100}duration={100}> 
      <GiSkills title='Tech & Skills'/>
        </Link>
       </div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'><FcVideoProjector title='Projects'/></div>
    </div>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='contact'spy={true} smooth={true}offset={-100}duration={100}>
         <FcBusinessContact title='contact'/>
        </Link>
        </div>
    </div>
    </div>
  </>
  ) }
  </>
  )

}

export default Menu