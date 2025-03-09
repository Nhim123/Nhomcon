import React, { useState, useEffect } from 'react'
import { useSpring, animated } from "@react-spring/web";

const Counter = ({ target }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: target },
    delay: 500,
    config: { mass: 1, tension: 120, friction: 14 },
    onRest: () => setIsComplete(true),
  });

  useEffect(() => {
    if (isComplete) {
      // Change color or perform any other action when the animation is complete
    }
  }, [isComplete]);

  return (
    <div className='font-bold text-3xl'>  
      <animated.span>
      {number.to((n) => Math.floor(n))}
      </animated.span>

      <animated.span>
      {isComplete ? ' +' : ''}
      </animated.span>
    </div>
    
  );
};

const CountingHome = () => {
    return (
    <div className='bg-sky-700'>
        <div className='mx-auto max-w-[1240px] '>
          <div className='grid grid-cols-3 text-3xl font-poppin text-white '>
                <div className='grid grid-row-2 text-center'>
                    <Counter target={40}/>
                    <p>Global Clients</p>
                </div>
                <div className='grid grid-row-2 text-center'>
                    <Counter target={650}/>
                    <p>Partnership</p>
              </div>
            
              <div className=' grid grid-row-2 text-center'>
                    <Counter target={700}/>
                    <p>Projects Completed</p>
            </div>
            
            <div className=' grid grid-row-2 text-center'>
                    <Counter target={25}/>
                    <p>Projects Completed</p>
            </div>
            
            <div className=' grid grid-row-2 text-center'>
                    <Counter target={700}/>
                    <p>Projects Completed</p>
            </div>
            
            <div className=' grid grid-row-2 text-center'>
                    <Counter target={700}/>
                    <p>Projects Completed</p>
              </div>
          </div>
      </div>        
    </div>
  )
}

export default CountingHome