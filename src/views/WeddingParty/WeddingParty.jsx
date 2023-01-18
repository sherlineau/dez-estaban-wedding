import React from 'react'
import './WeddingParty.css'

const WeddingParty = () => {
  return (
    <div className='container-center'>
      <h1 className='party-heading'>Castañeda Wedding</h1>
      <div className='party'>
        <div className="left">
          <ul>
            <li className='mb-2'>Maid of Honor - Valerie Vidana</li>
            <li></li>
            <li>Bridesmaids</li>
            <li>Elaine Valencia</li>
            <li>Tina Maynes</li>
            <li>Desiree Rodriguez</li>
            <li>Aeriel Vidana</li>
            <li>Sandra McDuffie</li>
            <li>Aileen Castañeda</li>
            <li>Aleanna Castañeda (flower girl)</li>
          </ul>
        </div>
        <div className="right">
        <ul>
            <li className='mb-2'>Best Man - Ramon Mora</li>
            <li></li>
            <li>Groomsmen</li>
            <li>Johnathon Castañeda</li>
            <li>Jerry Pasillas</li>
            <li>Juan Borunda</li>
            <li>Eddie Aguilar</li>
            <li>Gage Quintero</li>
            <li>--</li>
            <li>--</li>
            <li>Esai Quintero (ring bearer)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WeddingParty