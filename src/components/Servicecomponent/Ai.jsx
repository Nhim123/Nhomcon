import React from 'react'
import Paper from '@mui/material/Paper';
import Airobot from "../css/Services/Airobot.jpg";
import Costsaving from "../css/Services/Costsaving.svg"
import Target from "../css/Services/Target.svg"
import Startup from "../css/Services/Startup.svg"
import Brain from "../css/Services/Brain.svg"
import Hour from "../css/Services/24h.png";
import Smile from "../css/Services/Smile.svg"

const Ai = () => {
  return (
  <div className=''>
    <div className='w-full max-w-[1240px] mx-auto '>
      <h1 className='flex justify-center py-6 uppercase font-palanquin font-bold text-3xl'>Artificial Intelligence (AI)</h1>
      <div className='grid grid-cols-2 '>
        <div className='border-1 font-palanquin text-lg font-light normal-case	text-justify tracking-wide	'>
          <p className='leading-7'>
          The core idea behind AI is to create a “digital brain” to help solve real-world problems using data. Whether it’s Google Assistant, Siri, or Bixby on your smartphone, smart car, drone, or smart home devices – AI has become one of the emerging technologies of the century and significantly impacted our lives on a daily basis.
          </p>
          <p className='py-5 leading-7'>AI also plays an important part in every side of businesses, remodeling the ways of producing, manufacturing, and delivering services. Gain competitive advantages by understanding priorities, inclinations, and decision-making processes with the help of AI-powered solutions. Being one of the competitive AI service providers, VMO proudly delivers cutting-edge AI solutions to automate your business processes and operations to drive growth and efficiency, leveraging advanced methodologies such as machine learning, natural language processing, image recognition…</p>
        </div>
        <div className='flex justify-center'>
          <img src={Airobot} width={400} height={400} />
        </div>
      </div>
      <div className='grid grid-cols-3 py-20 space-x-10 '>
        <div>
          <Paper className='flex justify-center'>
            <div>
              <img src={Costsaving} width={100} height={100} />
              <h1 className='font-roboto font-extrabold uppercase pt-4'>Cost saving</h1>
            </div>
          </Paper>
        </div>

        <div>
          <Paper className='flex justify-center'>
            <div>
              <div className='flex justify-center'>
                <img src={Target} width={100} height={100} />
              </div>  
              <h1 className='font-roboto font-extrabold uppercase pt-4 text-wrap'>Operational control</h1>
            </div>
          </Paper>
        </div>

        <div>
          <Paper className='flex justify-center '>
              <div>
                <div className='flex justify-center '>
                  <img src={Startup} width={100} height={100} />
                </div>
              <h1 className=' flex justify-center font-roboto font-extrabold uppercase pt-4'>idealistic</h1>
            </div>
          </Paper>
        </div>
      </div>
        
      <div className='grid grid-cols-3 pb-20 space-x-10 '>
        <div>
          <Paper className='flex justify-center'>
              <div>
                <div className='flex justify-center'>
                  <img src={Brain} width={100} height={100} />
                </div>
              <h1 className='font-roboto font-extrabold uppercase pt-4'>Improve Productivity </h1>
            </div>
          </Paper>
        </div>
          
        <div>
          <Paper className='flex justify-center '>
              <div>
                <div className='flex justify-center '>
                <img src={Smile} width={100} height={100} />
                </div>
              <h1 className='font-roboto font-extrabold uppercase pt-4'>Customer Service</h1>
            </div>
          </Paper>
        </div>  
          
        <div>
          <Paper className='flex justify-center'>
              <div>
                <div className='flex justify-center'>
                <img src={Hour} width={100} height={100} />
                </div>
              <h1 className='font-roboto font-extrabold uppercase pt-4'>24 hour Support</h1>
            </div>
          </Paper>
        </div>

       
      </div>
    </div>
  </div>
  )
}

export default Ai