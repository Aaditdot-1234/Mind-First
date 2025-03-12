import React, {useRef, useEffect, useState} from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import './Brain.css';

const disorders = {
    depression: {
      name: 'Depression',
      description: 'A mood disorder characterized by persistent feelings of sadness, loss of interest, and various emotional and physical problems.',
    },
    anxiety: {
      name: 'Anxiety',
      description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one\'s daily activities.',
    },
    bipolar: {
      name: 'Bipolar Disorder',
      description: 'A mental health condition marked by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).',
    },
    schizophrenia: {
      name: 'Schizophrenia',
      description: 'A serious mental disorder that affects how a person thinks, feels, and behaves, often characterized by hallucinations and delusions.',
    },
    ocd: {
      name: 'Obsessive-Compulsive Disorder (OCD)',
      description: 'An anxiety disorder characterized by unwanted repetitive thoughts (obsessions) and actions (compulsions).',
    },
    ptsd: {
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      description: 'A mental health condition triggered by experiencing or witnessing a traumatic event, leading to severe anxiety and flashbacks.',
    },
    adhd: {
      name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description: 'A neurodevelopmental disorder characterized by difficulty paying attention, hyperactivity, and impulsive behavior.',
    },
    autism: {
      name: 'Autism Spectrum Disorder (ASD)',
      description: 'A developmental disorder that affects communication and behavior, often characterized by difficulties in social interaction.',
    },
    eating_disorders: {
      name: 'Eating Disorders (Anorexia, Bulimia)',
      description: 'Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life.',
    },
    dementia: {
      name: 'Dementia',
      description: 'A general term for a decline in mental ability severe enough to interfere with daily life, often involving memory loss and cognitive decline.',
    },
};
  
function Model(props) {
  const { scene } = useGLTF("/brain_project.glb");
  const modelRef = useRef();
  // const [modelPosition] = useState([-1.5, 0, 0]);

  useFrame(() => {
      if (modelRef.current) {
          modelRef.current.rotation.y += 0.005;
          // modelRef.current.position.set(...modelPosition);
      }
  });

  return (
      <>
          <primitive object={scene} ref={modelRef} {...props} />
      </>
  );
}


const Carousel = ({ currentDisorderIndex }) => {
  const disorderKeys = Object.keys(disorders);

  const getClassName = (index) => {
    if (index === currentDisorderIndex) {
      return 'card center';
    } else if (index === (currentDisorderIndex - 1 + disorderKeys.length) % disorderKeys.length) {
      return 'card left';
    } else if (index === (currentDisorderIndex + 1) % disorderKeys.length) {
      return 'card right';
    } else {
      return 'card hidden';
    }
  };

  return (
    <div className='carousel'>
      {disorderKeys.map((key, index) => (
        <div key={key} className={getClassName(index)}>
          <h2>{disorders[key].name}</h2>
        </div>
      ))}
    </div>
  );
};


const DisorderCarousel = ({ currentDisorderIndex, setCurrentDisorderIndex }) => {
    const disorderKeys = Object.keys(disorders);
  
    const handleNext = () => {
      setCurrentDisorderIndex((prevIndex) => (prevIndex + 1) % disorderKeys.length);
    };
  
    const handlePrevious = () => {
      setCurrentDisorderIndex((prevIndex) => (prevIndex - 1 + disorderKeys.length) % disorderKeys.length);
    };
  
    return (
      <div className="buttons">
            <div className='previous' 
              onClick={handlePrevious}
            >
              <img src="/arrow1.png" alt="not found" />  
            </div>
            <div className='next' 
              onClick={handleNext}
            >
              <img src="/arrow1.png" alt="not found" />
            </div>
      </div>
    );
  };
    
const Brain = () => {
  const [currentDisorderIndex, setCurrentDisorderIndex] = useState(0);
  const disorderKeys = Object.keys(disorders);
  const currentDisorder = disorderKeys[currentDisorderIndex];  
  
  // const brainPosition = [-1.5, 0, 0];
  return (
    <div id='brain' className='brain'>
        <DisorderCarousel
          currentDisorderIndex={currentDisorderIndex}
          setCurrentDisorderIndex={setCurrentDisorderIndex}
        /> 
        <div className='brainOverlay'>
            <div>
                <h2>{disorders[currentDisorder].name}</h2>
                <p>{disorders[currentDisorder].description}</p>
            </div>
            <div>
              <Carousel currentDisorderIndex={currentDisorderIndex} />
            </div>
        </div> 

        <Canvas dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 4] }}>
            <color attach="background" args={["antiquewhite"]} />
            {/* Adjusted: Position is directly applied in Stage */}
            <Stage environment={null} adjustCamera={false}>
                <Model position={[-7.75, 0, 0]} />  {/* Shifting the brain model to the left */}
            </Stage>
        </Canvas>
    </div>
  )
}

export default Brain