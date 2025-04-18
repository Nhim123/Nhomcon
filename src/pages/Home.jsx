import React from 'react';
import Hero from '../components/Hero';
import Project from '../components/Homecomponent/Project';
import Stepping from '../components/Homecomponent/Stepping';
import { Carousel } from '../components/Carousel'; // Import Carousel component
import CardHome from '../components/Homecomponent/CardHome';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <div className='bg-white space-y-10'>
      <Hero />

      <CountHome/>
      <div className='text-center mx-auto font-Nunito max-w-[1240px] py-3 space-y-3 text-2x'>
        <p className='uppercase font-semibold text-gray-500'>WHAT WE'RE OFFERING TO OUR CLIENTS</p>
        <p className='font-bold text-2xl text-gray-500'>Expert IT Software Development Service for Businesses of All Sizes</p>
        <h1 className='font-medium text-wrap'>We understand businesses of all sizes have their unique IT needs and challenges. That’s why we bring together in-depth industry expertise and the latest IT innovations to deliver bespoke solutions and products that perfectly meet the needs and behavior of their users.</h1>
      </div>
      <Project />
      <Stepping />
=======
=======

      
      <motion.div
        className='text-center mx-auto font-Nunito max-w-[1240px] pb-8 space-y-3 text-2x pt-20'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <p className='uppercase font-semibold text-xl text-gray-500'>WHAT WE'RE OFFERING TO OUR CLIENTS</p>
        <p className='font-bold text-2xl text-gray-500'>Expert IT Software Development Service for Businesses of All Sizes</p>
        <h1 className='font-medium text-wrap'>We understand businesses of all sizes have their unique IT needs and challenges. That’s why we bring together in-depth industry expertise and the latest IT innovations to deliver bespoke solutions and products that perfectly meet the needs and behavior of their users.</h1>
      </motion.div>
       {/* Added Carousel component */}

       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <CardHome />
      </motion.div>
      
       
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Project />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Stepping />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className='text-center mx-auto font-Nunito max-w-[870px] pb-8 space-y-3 text-2x pt-20'
      >
        <Carousel />
      </motion.div>
      
>>>>>>> 2bf60a10caa911c6df55bd0d8b15756af6ee3b38
    </div>
  );
};

export default Home;