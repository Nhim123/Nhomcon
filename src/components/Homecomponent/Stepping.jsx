import React, { useState } from 'react';

const Stepping = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const stepping = [
      {
        title: 'Requirement Reception',
        description: 'Receive and identify the staffing needs for the project.',
      },
      {
        title: 'Personnel Proposal',
        description: 'Develop a detailed proposal on positions, plans, and budget for staffing.',
      },
      {
        title: 'Interview Selection',
        description: 'Clients interview and evaluate the personnels competence, experience, and qualities.'
      },
      {
        title: 'Contract Signing',
        description: 'Sign the staffing contract between HungAnh and the client.',
      },
    ];

  return (
    <div>
    <p className='max-w-[1240px] mx-auto font-Nunito font-bold text-3xl text-gray-600 flex justify-start '>Our Streamlined 4-Step Process</p>
    <div className="grid grid-cols-4 gap-5 rounded-lg p-4 w-full max-w-[1240px] mx-auto">
      {stepping.map((stepping, index) => (
        <div
          key={index}
          className={`flex flex-col items-start justify-start font-Nunito space-y-5 p-4 rounded-lg border ${
            hoveredIndex === index ? 'bg-blue-500 text-white border-blue-700' : 'border-gray-300'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='flex items-center justify-center w-full'>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-xl">
              {index + 1}
            </div>
          </div>
          
          <p className="text-xl font-medium align-top text-center w-full">
            {stepping.title}
          </p>
          <h1 className="text-center w-full align-bottom leading-relaxed">
            {stepping.description}
          </h1>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Stepping