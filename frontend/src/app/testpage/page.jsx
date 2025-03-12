'use client'
import React from 'react' 
import styles from './Test.module.css'
import { motion } from 'framer-motion';
import Description from '@/app/user_ex/Home_page_Components/Description';

const buttons = {
  depression: {
    name: 'Depression',
    delaytime: 0.25
  },
  anxiety: {
    name: 'Anxiety',
    delaytime: 0.5
  },
  stress: {
    name: 'Stress',
    delaytime: 0.75
  },
  bipolar: {
    name: 'Bipolar Disorder',
    delaytime: 1
  },
  ptsd: {
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    delaytime: 1.25
  },
  ocd: {
    name: 'Obsessive-Compulsive Disorder (OCD)',
    delaytime: 1.5
  },
  adhd: {
    name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
    delaytime: 1.75
  },
  // autism: {
  //   name: 'Autism Spectrum Disorder (ASD)',
  //   delaytime: 2
  // },
  // eating_disorders: {
  //   name: 'Eating Disorders (Anorexia, Bulimia)',
  //   delaytime: 2.25
  // },
  // dementia: {
  //   name: 'Dementia',
  //   delaytime: 2.5
  // },
  // schizophrenia: {
  //   name: 'Schizophrenia',
  //   delaytime: 1
  // },
};

const Test = () => {
  const mentalDisorders = Object.keys(buttons);

  return (
    <div style={{ height:'fit-content' }}>
      <div className={styles.test}>
        <div className={styles.testinner}> 
          <div> 
            <h1>Take a Mental Health test.</h1>
            <h4>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</h4>
            <h2>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</h2>
          </div>
        </div>
        <div className={styles.categories}> 
          <h1>Mental Health Tests:</h1>
          <div>
          {mentalDisorders.map((key, index) => (
            <motion.div
              initial={{ opacity:0, x: -100 }}
              whileInView={{ opacity:1, x: 0 }}
              transition={{ delay: buttons[key].delaytime, duration: 4, type: 'spring', stiffness: 25 }}
              viewport={{ once: true, amount: 0.5 }}
              key={key}
              className={styles.testLink} 
            > 
              <a href={`/testpage/${key}`}>{buttons[key].name}</a>
            </motion.div> 
          ))}
          </div>
        </div>  
        <div className={styles.work}>
          <motion.div 
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}          
          > 
            <h1>How it works?</h1> 
            <p>After your mental health test, you will see information, resources, and tools to help you understand and improve your mental health.</p> 
            <button>How can online mental health testing help me?</button>
            <button>What do my mental health test results mean?</button>
            <button>About our mental health tests</button>
            <h2>Please note:</h2>
            <p>Online screening tools are meant to be a quick snapshot of your mental health. If your results indicate you may be experiencing symptoms of a mental illness, consider sharing your results with someone. A mental health provider (such as a doctor or a therapist) can give you a full assessment and talk to you about options for how to feel better.</p>
            <p>For all other screening-related questions and non-emergency support, please use <a href="">Mind First's Contact Us form</a>.</p> 
            <p>Mind First's, sponsors, partners, and advertisers disclaim any liability, loss, or risk incurred as a consequence, directly or indirectly, of the use and application of these screens.</p>
          </motion.div>
        </div>
        <Description/>
      </div>
    </div>
  )
}

export default Test;