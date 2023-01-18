import React from 'react'
import img from '../../assets/images/IMG_9182.jpg'
import './OurStory.css'

const OurStory = () => {
  return (
    <div className='container-center'>
      <img src={img} alt="dez and estaban proposal"/>
      <div className='story'>
        <h1>#unfinished</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default OurStory