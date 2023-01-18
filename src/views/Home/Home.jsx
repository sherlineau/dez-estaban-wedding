import React from 'react'
import './Home.css'
import img from '../../assets/images/IMG_9089.jpg'

const Home = () => {
  return (
    <div className='container-center'>
      <img src={img} alt="dez and estaban horse-back riding"/>
      <div>
        <button className='rsvp'>RSVP</button>
        <p>May 13, 2023 @ 12:30PM</p>
      </div>
    </div>
  )
}

export default Home