import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sales from '../../assets/sales.png'; // Correctly import the PNG image
import softwaredevelopment from '../../assets/softwaredevelopment.png'; // Correctly import the PNG image
import branch from '../../assets/branch.png'; // Correctly import the PNG image
import corporation from '../../assets/corporation.png'; // Correctly import the PNG image

const Project = () => {
  const [visibleProject, setVisibleProject] = useState(1);

  const toggleVisibility = (project) => {
    setVisibleProject(visibleProject === project ? project : project);
  };

  return (
    <div className='mx-auto max-w-[1240px] py-5 border-collapse border-4 my-5 rounded-xl'>
      <div className='grid grid-cols-4 font-bold font-Nunito text-base text-customBlue'>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(1)}> 
          <img src={Sales} alt="Sales" className='w-20 h-20 mx-auto' /> {/* Use the imported image */}
          <h1>Supply Chain Management</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(2)}>
          <img src={softwaredevelopment} alt="Sales" className='w-20 h-20 mx-auto' /> {/* Use the imported image */}
          <h1>Software Consulting</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(3)}>
          <img src={branch} alt="Sales" className='w-20 h-20 mx-auto' /> {/* Use the imported image */}
          <h1>Software Development</h1>
        </div>
        <div className='grid grid-rows-2 text-center space-y-4 p-4 hover:text-amber-600' onClick={() => toggleVisibility(4)}>
          <img src={corporation} alt="Sales" className='w-20 h-20 mx-auto' /> {/* Use the imported image */}
          <h1>Human Resources Solution</h1>
        </div>            
      </div>
      <div className='text-center'>
        {visibleProject === 1 && (
          <>
            <p>Our supply chain management services optimize logistics, reduce costs, and enhance efficiency. We streamline procurement, inventory, and distribution, ensuring seamless operations. By leveraging data-driven insights and automation, we improve visibility, minimize risks, and boost customer satisfaction. Partner with us for a smarter, more resilient supply chain that drives business success.</p>
            <Link to="/services/supplychain" className="text-blue-500 underline">Read More</Link>
          </>
        )}
        {visibleProject === 2 && (
          <>
            <p>Our software consulting services help businesses optimize technology, improve efficiency, and drive innovation. We provide expert guidance on software development, system integration, and digital transformation. By understanding your unique needs, we deliver tailored solutions that enhance performance, reduce costs, and ensure scalability for long-term success. Partner with us today!</p>
            <Link to="/services/ai" className="text-blue-500 underline">Read More</Link>
          </>
        )}
        {visibleProject === 3 && (
          <>
            <p>Our software development services deliver custom solutions tailored to your business needs. We design, build, and deploy scalable, high-performance applications that enhance efficiency and drive growth. From web and mobile apps to enterprise systems, we ensure seamless integration, security, and innovation. Let us turn your ideas into powerful software solutions.</p>
            <Link to="/services/webapp" className="text-blue-500 underline">Read More</Link>
          </>
        )}
        {visibleProject === 4 && (
          <>
            <p>Our Human Resources IT solutions streamline HR processes, improve workforce management, and enhance employee experience. We offer automated payroll, recruitment, performance tracking, and compliance management. By integrating advanced technology, we boost efficiency, reduce administrative burdens, and enable data-driven decision-making. Empower your HR team with innovative, scalable, and secure solutions.</p>
            <Link to="/services/mobileapp" className="text-blue-500 underline">Read More</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;