import React from 'react'
import './Therapist.css'
import { useState } from 'react'
import { color } from 'framer-motion';

const Therapist = () => {   
  const [activeBlock, setActiveBlock] = useState('Block1');  
   
  const data = [
    {id:'Block1', name:'Martin Seligman', content:'Block1', image:'/martin.jpg'},
    {id:'Block2', name:'Steven Pinker', content:'Block2', image:'/steven.jpg'},
    {id:'Block3', name:'Daniel Kahneman', content:'Block3', image:'/daniel.webp'},
    {id:'Block4', name:'Susan Fiske', content:'Block4', image:'/susan.jpg'}
  ]  

  const activeImage = data.find(block => block.id === activeBlock)?.image

  return (
    <div 
      id='therapist'
      className='therapist'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(133, 46, 255, 0.75), rgba(125, 60, 255, 0.6), rgba(110, 84, 255, 0.75)), url(${activeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      <div className='therapistinner'>
          {data.map(block => (
          <div key={block.id} 
              onMouseEnter={() => setActiveBlock(block.id)} 
          > 
            <h3>{block.name}</h3>
            <div
              // style={{backgroundColor: block.color}} 
            >
              <img src={block.image} alt="not found" />                  
            </div>
          </div>
          ))}
      </div> 
      <div className='therapistinner2'>
          {data.map(block => (
              <div
                  key={block.id}
                  style={{
                  zIndex: activeBlock === block.id ? 4 : 1,
                  display: activeBlock === block.id ? 'flex' : 'none',
                  // backgroundColor: activeBlock === block.id ? block.color : 'white',
                  backgroundColor: 'white',
                  }}
              >
                <h3>{block.name}:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati autem voluptas sit, sed natus earum maiores cumque atque veniam nesciunt eius nisi, numquam, nihil reprehenderit debitis. Dolor, architecto perspiciatis!</p>
              </div>
          ))}
      </div> 
    </div>
  )
}

export default Therapist