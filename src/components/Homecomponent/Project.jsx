import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sales from '../../assets/sales.png';
import softwaredevelopment from '../../assets/softwaredevelopment.png';
import branch from '../../assets/branch.png';
import corporation from '../../assets/corporation.png';

const Project = () => {
  const [visibleProject, setVisibleProject] = useState(1);

  const toggleVisibility = (project) => {
    setVisibleProject(visibleProject === project ? project : project);
  };

  return (
    <div>
      <div className='mx-auto max-w-[1240px]'>
        <div className='flex items-center'>
            <hr className='border-gray-800 w-[100px] border-3 mr-4' />
            <p className='font-Nunito text-2xl font-bold text-gray-700'>Our Service</p> 
        </div>
    </div>
      <div className='mx-auto max-w-[1240px] py-5 border-collapse border-4 my-5 rounded-xl'>
      <div className='grid grid-cols-4 font-bold font-Nunito text-base text-customBlue mb-[-22px]'>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(1)}> 
          <img src={Sales} alt="Sales" className='w-20 h-20 mx-auto' />
          <h1>Supply Chain Management</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(2)}>
          <img src={softwaredevelopment} alt="Sales" className='w-20 h-20 mx-auto' />
          <h1>Software Consulting</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(3)}>
          <img src={branch} alt="Sales" className='w-20 h-20 mx-auto' />
          <h1>Software Development</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(4)}>
          <img src={corporation} alt="Sales" className='w-20 h-20 mx-auto' />
          <h1>Human Resources Solution</h1>
        </div>            
      </div>
      <div className='text-center'>
        {visibleProject === 1 && (
          <>
            <p>Our supply chain management services optimize logistics, reduce costs, and enhance efficiency. We streamline procurement, inventory, and distribution, ensuring seamless operations. By leveraging data-driven insights and automation, we improve visibility, minimize risks, and boost customer satisfaction. Partner with us for a smarter, more resilient supply chain that drives business success.</p>
            <div className="mt-4">
              <Link to="/services/supplychain" className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Read More</Link>
            </div>
          </>
        )}
        {visibleProject === 2 && (
          <>
            <p>Our software consulting services help businesses optimize technology, improve efficiency, and drive innovation. We provide expert guidance on software development, system integration, and digital transformation. By understanding your unique needs, we deliver tailored solutions that enhance performance, reduce costs, and ensure scalability for long-term success. Partner with us today!</p>
            <div className="mt-4">
              <Link to="/services/ai" className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Read More</Link>
            </div>
          </>
        )}
        {visibleProject === 3 && (
          <>
            <p>Our software development services deliver custom solutions tailored to your business needs. We design, build, and deploy scalable, high-performance applications that enhance efficiency and drive growth. From web and mobile apps to enterprise systems, we ensure seamless integration, security, and innovation. Let us turn your ideas into powerful software solutions.</p>
            <div className="mt-4">
              <Link to="/services/webapp" className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Read More</Link>
            </div>
          </>
        )}
        {visibleProject === 4 && (
          <>
            <p>Our Human Resources IT solutions streamline HR processes, improve workforce management, and enhance employee experience. We offer automated payroll, recruitment, performance tracking, and compliance management. By integrating advanced technology, we boost efficiency, reduce administrative burdens, and enable data-driven decision-making. Empower your HR team with innovative, scalable, and secure solutions.</p>
            <div className="mt-4">
              <Link to="/services/mobileapp" className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Read More</Link>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Project;