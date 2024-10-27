import React from 'react'
import Boat from '../css/Supplychain/Boatship.jpg';
import './Image.css'

const Image = () => {
  return (
    <div className="image-container">
    <img src={Boat}  className="background-image" />
    <div className="slide-in-text">
      Your Text Here
    </div>
  </div>
  )
}

export default Image