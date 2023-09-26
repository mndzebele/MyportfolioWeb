import React from 'react'
import'./about.css'
import AboutP from '../../images/about.jpg';
const About = () => {
  return (
   <>
   <div className='about'id='about'>
    <div className='row'>
        <div className='col-md-6 col-sx-6 col-lg-6 col-xs-12 about-img'><img src={AboutP} alt='profile-pic'/></div>
        
        <div className='col-md-6 col-sx-6 col-lg-6 col-xs-12 about-content'>
            <h1>About Me</h1>
            <p>
             I am a level 3 Computer Science student enrolling at University Of Eswatini, I am very passionate in sotfware engineering, networking, web development and artificial intelligence. I am a reliable, organized and interpersonal individual with excellent team working skills. Highly versatile,flexible, and self motivated.
             I am an active member of ICT society. 
            </p>
        </div>
    </div>
   </div>
   </>
  )
}

export default About