import React, { useEffect, useState } from 'react'
import './Working.css'

const processSteps = [
    {
      id: 1,
      title: "Step 1: Take the Test",
      description: "Click on the test button on the landing page to start your mental health assessment.",
      imageUrl: "/test.png"
    },
    {
      id: 2,
      title: "Step 2: Chatbot Conversation",
      description: "Engage with our chatbot, which will analyze your responses and suggest potential disorders.",
      imageUrl: "/chat.png"
    },
    {
      id: 3,
      title: "Step 3: Questionnaire",
      description: "Complete a brief questionnaire to validate the chatbot's suggestions.",
      imageUrl: "/question.png" 
    },
    {
      id: 4,
      title: "Step 4: Consultation Choices",
      description: "Based on your results, explore consultation options with our specialists.",
      imageUrl: "/consult.png" 
    },
    {
      id: 5,
      title: "Step 5: Personalized Recommendations",
      description: "Receive tailored recommendations based on your assessment results and preferences.",
      imageUrl: "/recommend.png" 
    },
    {
      id: 6,
      title: "Step 6: Schedule an Appointment",
      description: "Choose a suitable time and date to schedule an appointment with a mental health professional.",
      imageUrl: "/appoint.png" 
    },
    {
      id: 7,
      title: "Step 7: Attend the Consultation",
      description: "Meet with your chosen specialist, either virtually or in-person, to discuss your mental health in detail.",
      imageUrl: "/appoint.png"
    },
    {
      id: 8,
      title: "Step 8: Follow-Up Support",
      description: "Access ongoing support and resources to help you on your mental health journey.",
      imageUrl: "/support.png"
    }
];


const CarouselItem = ({currentStepIndex}) => {
    const Steps = Object.keys(processSteps)

    const getClassName = (index) => {
        if (index === currentStepIndex) {
          return 'steps center';
        } else if (index === (currentStepIndex - 1 + Steps.length) % Steps.length) {
          return 'steps left';
        } else if (index === (currentStepIndex + 1) % Steps.length) {
          return 'steps right';
        } else {
          return 'steps hidden';
        }
    };

    return (
        <div className='Carousel'>
            {Steps.map((key, index) => (
                <div key={key} className={getClassName(index)}>
                    <img src={processSteps[index].imageUrl} alt="not found" />
                    <h3>{processSteps[index].title}</h3>
                    <p>{processSteps[index].description}</p>
                </div>
            ))}
        </div>
    );
}


const Work = () => {     
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const Timeout = () => {
    if(currentStepIndex < (processSteps.length - 1)){
        setCurrentStepIndex(currentStepIndex + 1)
    }
    else{
        setCurrentStepIndex(0)
    }
  }

  useEffect(() => {
    const timer = setTimeout(Timeout,5000); 
    return () => clearTimeout(timer);
  },[currentStepIndex])

  return (
    <div className='working'>
        <div>
            <h1>HOW IT WORKS</h1>
        </div>
        <div>
            <h1>Easy Steps to get awesome Consultation.</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam iste optio saepe voluptates reiciendis</p>
        </div>
        <CarouselItem currentStepIndex={currentStepIndex}/>
    </div>
  )
}

export default Work