import React from 'react'
import Mobileapps from '../css/Mobbile-app/Mobileapp.jpg';
import Ios from '../css/Mobbile-app/Ios.svg'
import Android from '../css/Mobbile-app/Android.svg'
import UX from '../css/Mobbile-app/UX.svg'
import Reacts from '../css/Mobbile-app/React.svg'
import Support from '../css/Mobbile-app/Support.svg'
import Security from '../css/Mobbile-app/Security.svg'

const Mobileapp = () => {
  return (
    <div>
    <div className='w-full max-w-[1240px] mx-auto pb-5'>
      <h1 className='flex justify-center py-6 uppercase font-palanquin font-bold text-3xl'>Mobile-Application Development</h1>
      <div className='grid grid-cols-2 '>
        <div className='flex justify-center'>
          <img src={Mobileapps} width={400} height={400} />
        </div>
        <div className='border-1 font-palanquin text-lg font-light normal-case	text-justify tracking-wide	'>
          <p className='leading-7'>
          The core idea behind AI is to create a “digital brain” to help solve real-world problems using data. Whether it’s Google Assistant, Siri, or Bixby on your smartphone, smart car, drone, or smart home devices – AI has become one of the emerging technologies of the century and significantly impacted our lives on a daily basis.
          </p>
          <p className='py-5 leading-7'>AI also plays an important part in every side of businesses, remodeling the ways of producing, manufacturing, and delivering services. Gain competitive advantages by understanding priorities, inclinations, and decision-making processes with the help of AI-powered solutions. Being one of the competitive AI service providers, VMO proudly delivers cutting-edge AI solutions to automate your business processes and operations to drive growth and efficiency, leveraging advanced methodologies such as machine learning, natural language processing, image recognition…</p>
          </div>
        </div>
        </div>  

      
      <div className='w-full max-w-[1240px] mx-auto pb-5' >
      <div className='grid grid-cols-3 py-20 '>
        <div className='grid grid-cols space-y-2'>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400' src={Ios} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top'> IOS APP DEVELOPMENT</h1>
          <p className='text-center font-roboto'>We create memorable experiences across various iOS devices. Backed by top iOS developers that master Objective-C and Swift language, we create top-notch iOS apps while ensuring to follow strict Apple standards.</p> 
        </div>

        <div className='grid grid-cols space-y-2  '>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400' src={UX} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top'> UI/UX DESIGN</h1>
          <p className='text-center font-roboto'>We design Mobile apps with wow factor. VMO design team has extensive experience in creating engaging visuals that are user-centered and guarantee to provide great digital experience</p> 
        </div>

        <div className='grid grid-cols space-y-2  '>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400' src={Android} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top'> Android App Development</h1>
          <p className='text-center font-roboto'>Android-based devices are taking the majority of the market share, making it crucial to develop an Android app. We have experience in designing, developing and deploying Android apps</p> 
        </div>
        </div>
        
      <div className='grid grid-cols-3 pb-10 '>
        <div className='grid grid-cols space-y-2'>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400' src={Reacts} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top'> React Native App Development</h1>
          <p className='text-center font-roboto align-top'>React Native is the trusted development framework for cross-platform mobile apps. Incorporating React Native helps to optimize performance, reduce cost and time for apps running on both Android and iOS platform.</p> 
        </div>

        <div className='grid grid-cols space-y-2  '>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400'  src={Security} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top	'> App Testing</h1>
          <p className='text-center font-roboto align-baseline'>React Native is the trusted development framework for cross-platform mobile apps. Incorporating React Native helps to optimize performance, reduce cost and time for apps running on both Android and iOS platform.</p> 
        </div>

        <div className='grid grid-cols space-y-2  '>
          <div className='flex justify-center'>
          <img className='shadow-xl shadow-orange-400' src={Support} width={100} height={100} />
          </div>
          <h1 className='text-center font-roboto font-extrabold uppercase pt-4 align-top'> App Support & Maintenance</h1>
          <p className='text-center font-roboto'>Android-based devices are taking the majority of the market share, making it crucial to develop an Android app. We have experience in designing, developing and deploying Android apps</p> 
        </div>
      </div>
      </div>
    
      </div> 
  )
}

export default Mobileapp