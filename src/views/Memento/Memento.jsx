import React from 'react'
import memento from '../../assets/images/memento_qr.png'
import './Memento.css'

const Memento = () => {
  return (
    <div className="container-center">
      <div className="memento">
        <div className="content">
          <p>Dear friends and family, as we look back on our special day, we would love to relive the joy and laughter through your lens. Please share any candid photos and videos you captured at our wedding by clicking the image below.  Your memories are a treasure to us and we are forever grateful for them.  Thank you for being a part of our journey. ❤️ </p>
        </div>
        <a
          href=" https://albums.memento.com/unfinished"
          target="_blank"
          rel="noreferrer"
        >
          <img src={memento} alt="memento link" />
          <p>Scan or click the QR code</p>
        </a>
      </div>
    </div>
  )
}

export default Memento