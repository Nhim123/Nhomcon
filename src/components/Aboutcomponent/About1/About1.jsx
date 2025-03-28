import React from 'react'
import './About1.css'

const About1 = ({ position, circlePosition }) => {
  const content = position === 'right' 
    ? 'This is the flipped content for the right position.'
    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum dolores fugit eos beatae aspernatur neque nisi deserunt maxime illo facilis excepturi iure, perferendis libero, quisquam quos! Nesciunt, aspernatur expedita!';

  return (
    <div className={`rectangle ${position === 'right' ? 'flipped' : ''}`}>
      <div className={`circle ${circlePosition === 'right' ? 'circle-right' : 'circle-left'}`} />
      <p className='text flex justify-end text-black'>{content}</p>
    </div>
  )
}

export default About1