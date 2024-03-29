import React, { useState } from 'react'
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import { UseContextProvider } from "./contexts/StepperContext";
import Account from './steps/Account';
import Details from './steps/Details';
import Payment from './steps/Payment';
import Final from './steps/Final';

const StepFormBody = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Account Information",
    "Personal Details",
    // "Payment",
    // "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      // case 3:
      //   return <Payment />;
      // case 4:
      //   return <Final />;
      default:
    }
  };
  // const displayStep = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <Account />;
  //     case 2:
  //       return <Details />;
  //     case 3:
  //       return <Payment />;
  //     case 4:
  //       return <Final />;
  //     default:
  //   }
  // };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className='lg:pt-[140px] mb-16'>
      {/* Stepper */}
      <div className="mx-auto rounded-2xl bg-white pb-2  md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          {/* <Stepper steps={steps} currentStep={currentStep} /> */}

          <div className="my-3 px-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
      {/* navigation Controls */}
    </div>
  )
}

export default StepFormBody