import React from 'react'
import './Therapist.css'
import { useState } from 'react'
import { color } from 'framer-motion';

const Therapist = () => {   
  const [activeBlock, setActiveBlock] = useState('Block1');  
   
  const data = [
    {id:'Block1', name:'Martin Seligman', content:'Block1', color:'lightyellow', image:'/martin.jpg'},
    {id:'Block2', name:'Steven Pinker', content:'Block2', color:'lightgreen', image:'/steven.jpg'},
    {id:'Block3', name:'Daniel Kahneman', content:'Block3', color:'lightblue', image:'/daniel.webp'},
    {id:'Block4', name:'Susan Fiske', content:'Block4', color:'#dacfff', image:'/susan.jpg'}
  ]  

  const activeColor = data.find(block => block.id === activeBlock)?.color || 'white';

  return (
    <div 
      id='therapist'
      className='therapist'
      style={{
        backgroundColor: activeColor
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