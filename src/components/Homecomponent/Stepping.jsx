import React, { useState } from 'react';

const Stepping = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const stepping = [
      {
        title: 'One-stop Software Development services',
        description: 'From consulting, design, and development to operation and maintenance, we offer a full spectrum of software development services at every stage of the product lifecycle, meeting international quality standards. We flexibly cater to client needs, optimizing time and cost for each project.',
      },
      {
        title: 'Supply Chain Management',
        description: 'Ensuring efficient logistics, timely delivery, cost savings, optimized operations, and seamless business success with reliability.',
      },
      {
        title: '',
        description: '.',
      },
      {
        title: '',
        description: '',
      },
    ];

  return (
    <div>
    <p className='font-Nunito font-bold text-3xl text-gray-600 flex justify-center '>Our Services</p>
    <div className="grid grid-cols-4 gap-5 rounded-lg p-4 w-full max-w-[1240px] mx-auto">
      {stepping.map((stepping, index) => (
        <div
          key={index}
          className={`flex flex-col items-start justify-start font-Nunito space-y-3 p-4 rounded-lg border-2 ${
            hoveredIndex === index ? 'bg-blue-500 text-white border-blue-700' : 'border-gray-300'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="text-2xl font-popin font-semibold align-top w-full">
            {index + 1}. {stepping.title}
          </p>
          <h1 className="text-justify w-full align-bottom">{stepping.description}</h1>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Stepping