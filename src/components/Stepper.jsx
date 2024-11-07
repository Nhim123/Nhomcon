import React from 'react'
import "../components/css/Stepper.css";
import { useState, useEffect } from 'react';


const Stepper = () => {
  const steps = ["Sourcing & Selection", "Cooperative Negotiation", "Production Control", "Packaging & Labeling" , "Loading & Transportaion", "Declaration & Clearance"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const autoStepper = () => {
    const nextStep = currentStep < 6 ? currentStep + 1 : 6;
    setCurrentStep(nextStep);
  }
  useEffect(() => {
    const interval = setInterval(autoStepper, 1200);
    return () => {
      clearInterval(interval);
      if (currentStep === 6) {
        // You can add additional logic or callbacks when the last step is reached
        console.log('Stepper reached the last step');
      }
    };
  }, [currentStep]);

  return (
    <>
    <div>
      <div className='flex step-container justify-between gap-10'>
        {steps?.map((step, i) => (
          <div key={i}
            className={`step-item ${currentStep === i + 1  && "active"} 
            ${(i + 1 < currentStep || currentStep === steps.length ) && "complete"} `}
          >
            <div className="step">
              {i + 1}</div>
            <p className='text-slate-900 font-semibold	'>{step}</p>
          </div>
      ))}  
      </div>
     
    </div>
    </>
  )
}

export default Stepper