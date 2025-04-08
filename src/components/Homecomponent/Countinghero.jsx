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
    <div className='font-bold text-2xl relative'>  
      <animated.span>
        {number.to((n) => Math.floor(n))}
      </animated.span>
      {isComplete && (
        <animated.span className='absolute -top-3  text-xl'>
          +
        </animated.span>
      )}
    </div>
  );
};

const CountingHero = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-black to-blue-900 opacity-90'> {/* Black-blue gradient background */}
          <div className='mx-auto max-w-[1240px]'>
            <div className='flex flex-cols font-poppin text-white text-3xl py-4 space-x-16 justify-center'>  
                  <div className='flex flex-rows space-x-5 items-center'>
                      <Counter target={40}/>
                      <p className='text-2xl'>Successful Projects </p>
                   </div>
              
                  <div className='flex flex-rows space-x-5 items-center'>
                      <Counter target={50}/>
                      <p className='text-2xl'>Employees</p>
                  </div>
 
                  <div className='flex flex-rows space-x-5 items-center'>
                        <Counter target={5} />
                        <p className='text-2xl'>Years Of Experience</p>
                  </div>

                  <div className='flex flex-rows space-x-5 items-center'>
                        <Counter target={20} />
                        <p className='text-2xl'>Long-term Partnerships</p>
                  </div>
            </div>
            </div>
        </div>        
      </div>
     
  )
}

export default CountingHero