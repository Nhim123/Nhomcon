import React, { useState } from 'react'


const Project = () => {
  const [visibleProject, setVisibleProject] = useState(1);

  const toggleVisibility = (project) => {
    setVisibleProject(visibleProject === project ? project : project);
  };

  return (
    <div className='mx-auto max-w-[1240px] py-5 border-collapse border-4 my-5 rounded-xl'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='grid grid-rows-2 text-center space-y-2 p-4' onClick={() => toggleVisibility(1)}> 
                <h1>Project 1</h1>
            </div>
            <div className='grid grid-rows-2 text-center space-y-2 p-4' onClick={() => toggleVisibility(2)}>
                <h1>Project 2</h1>
            </div>
            <div className='grid grid-rows-2 text-center space-y-2 p-4' onClick={() => toggleVisibility(3)}>
                <h1>Project 3</h1>
            </div>
            <div className='grid grid-rows-2 text-center space-y-2 p-4' onClick={() => toggleVisibility(4)}>
                <h1>Project 4</h1>
            </div>            
        </div>
        <div className='text-center mt-3'>
            {visibleProject === 1 && <p>Description for Project 1</p>}
            {visibleProject === 2 && <p>Description for Project 2</p>}
            {visibleProject === 3 && <p>Description for Project 3</p>}
            {visibleProject === 4 && <p>Description for Project 4</p>}
        </div>
    </div>
  )
}

export default Project