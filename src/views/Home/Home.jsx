import React from 'react'
import './Home.css'
import img from '../../assets/images/IMG_9089.jpg'

const Home = () => {
  return (
    <div className='container-center home'>
      <img src={img} alt="dez and estaban horse-back riding"/>
      <div className='rsvp'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfyWGwLNA-AK4-wQ-EMb6KGQpeCKMNmxqSPYn-0vybsQhqjSw/viewform?usp=sf_link' className='rsvp-btn' target="_blank" rel="noreferrer">RSVP</a>
        <p>May 13, 2023 @ 12:30PM</p>
      </div>
    </div>
  )
}

export default Home