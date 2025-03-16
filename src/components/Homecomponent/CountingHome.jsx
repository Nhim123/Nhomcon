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
    <div className='font-bold text-4xl'>  
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
    <div>
       
      
      <div className='bg-BabyBlue'>
          <div className='mx-auto max-w-[1240px]'>
                  <div className='grid grid-cols-2'>
                    <div className='w-84'>
                    <p className='font-semibold font-poppin text-4xl py-3 text-white'>Our Services</p>
                    </div>
                  </div>
          </div>
        
          <div className='mx-auto max-w-[1240px] '>
          <div className='grid grid-cols-3'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='grid grid-rows-2 font-poppin text-white text-3xl py-4'>  
                  <div className='grid grid-row-2 text-center'>
                      <Counter target={40}/>
                      <p>Global Clients</p>
                   </div>
              
                  <div className='grid grid-row-2 text-center'>
                      <Counter target={650}/>
                      <p>Partnership</p>
              </div>
            </div>
            <div className='grid grid-rows-2 font-poppin text-white text-3xl py-4'>   
                  <div className=' grid grid-row-2 text-center'>
                        <Counter target={700} />
                        <p>Talents</p>
                  </div>
              
                  <div className=' grid grid-row-2 text-center'>
                        <Counter target={700}/>
                        <p>Talents</p>
                  </div>
            </div>
                  
            
            </div>
        </div>        
      </div>
    </div>
     
  )
}

export default CountingHome