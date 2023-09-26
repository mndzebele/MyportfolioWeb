import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
const home = () => {
  return (
    <>
    <div className='container-fluid home-container' id='home'>
      <div className='container home-content'>
        <h1>Hi👋 I'm a</h1>
        <h2>
          <Typewriter
          options={{
            strings:["Computer Science Student","Level 3","At University of Eswatini"],
            autoStart: true,
            loop: true,
          }}
          />
        </h2>
        <div className='home-button'>
          <button className='btn btn-cv'> My Resume</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default home