import React, { useState } from 'react';
import { motion, progress } from 'framer-motion';
import './newspaper.css';

const newsData = [
  { 
    title: "Mental Health Awareness Rises", 
    content: "More people are becoming aware of mental health issues, leading to an increase in discussions and resources available to those in need.", 
    id: 0, 
    image: "mental.png",  
  },
  { 
    title: "Innovative Therapy Techniques", 
    content: "New therapy techniques, such as virtual reality and AI-driven approaches, are revolutionizing the mental health field.", 
    id: 1, 
    image: "/friends.png",
    delay: 5,
    index: 6
  },
  { 
    title: "Combating Burnout in the Workplace", 
    content: "Employers are increasingly focusing on strategies to combat burnout, including mental health days and wellness programs.", 
    id: 2, 
    image: "/friends.png",
    delay: 10, 
    index: 5
  },
  { 
    title: "The Importance of Self-Care", 
    content: "Self-care is being recognized as a crucial component of mental health, with more resources available to guide individuals.", 
    id: 3, 
    image: "/friends.png",
    delay: 15, 
    index: 4 
  },
  { 
    title: "Mental Health in Schools", 
    content: "Schools are integrating mental health education into their curricula, helping students understand and manage their emotions better.", 
    id: 4, 
    image: "/friends.png",
    delay: 20,
    index: 3
  },
  { 
    title: "Addressing Anxiety in Teens", 
    content: "Rising levels of anxiety among teenagers are being addressed through innovative programs and support systems.", 
    id: 5, 
    image: "/friends.png",
    delay: 25,
    index: 2
  },
  { 
    title: "Support for Postpartum Depression", 
    content: "New support groups and treatment options are emerging for mothers experiencing postpartum depression.", 
    id: 6, 
    image: "/friends.png",
    delay: 30,
    index: 1  
  }, 
];

const Newspaper = () => {
  // const [currentPage, setCurrentPage] = useState(0); // Track the current page
  // const [zIndex, setZIndex] = useState(newsData.filter(page => page.id !== 0).map(page => page.index)); // Dynamic z-index state
  // const [isFlipping, setIsFlipping] = useState(false); // To prevent fast multiple clicks

  // const handleNext = () => {
  //   if (currentPage < newsData.length - 1 && !isFlipping) {
  //     setIsFlipping(true);
  //     setTimeout(() => {
  //       setCurrentPage((prev) => {
  //         handleAnimationUpdate(prev + 1);
  //         return prev + 1;
  //       });
  //       setIsFlipping(false);
  //     }, 1000); 
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentPage > 0 && !isFlipping) {
  //     setIsFlipping(true);
  //     setTimeout(() => {
  //       setCurrentPage((prev) => {
  //         handleAnimationUpdate(prev - 1);
  //         return prev - 1;
  //       });
  //       setIsFlipping(false);
  //     }, 1000);
  //   }
  // };

  // const handleAnimationUpdate = (pageId) => {
  //   setZIndex((prevZIndex) => {
  //     const newZIndex = [...prevZIndex];
  //     const index = newsData.findIndex((page) => page.id === pageId);
  //     if (index !== -1) {
  //       newZIndex[index] = newsData.length - index; // Decrement z-index dynamically
  //     }
  //     return newZIndex;
  //   });
  // };
  
  const [zIndex, setZIndex] = useState(
    newsData.filter(page => page.id !== 0).map(page => page.index)
  );

  const firstPage = newsData.filter(page => page.id === 0);

  const page1 = firstPage.map(page => (
    <div 
      key={page.id} 
      className='page1' 
    >
      <a>
        <img src={page.image} alt="not found" />
      </a>
      <a>{page.title}</a>
      <p>{page.content}</p>
    </div>
  )); 

  const rest = newsData.filter(page => page.id !== 0);
  
  const pages = rest.map(page => (
    <motion.div 
      key={page.id} 
      className='page'
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'left',
        zIndex: zIndex[rest.findIndex(p => p.id === page.id)]
      }} 
      initial={{ rotateY: 0 }}
      whileInView={{ rotateY: 180 }}
      transition={{ delay: page.delay, duration: 3 }}
      onUpdate={(latest) => handleAnimationUpdate(page.id, latest.rotateY / 180)}
    > 
      <a>
        <img src={page.image} alt="not found" />
      </a>
      <a>{page.title}</a>
      <p>{page.content}</p>
    </motion.div>
  ));

  const handleAnimationUpdate = (pageId, progress) => {
    if (progress >= 0.5) {   
      setZIndex((prevZIndex) => {
        const newZIndex = [...prevZIndex];
        const index = rest.findIndex(page => page.id === pageId);
        if (index !== -1) {
          newZIndex[index] = pageId; 
        }
        return newZIndex;
      });
    }
  };
  
  return ( 
    <div className='newsPaper'>
      <div className='overlay3'>
        <div className='previous'>
          <img src="/arrow1.png" alt="not found" />
        </div>
        <div className='next'>
          <img src="/arrow1.png" alt="not found" /> 
        </div>
      </div>
      <div className='newsp'>
        <div className='backPageSection'>{page1}</div>
        <div className='frontPageSection'>{pages}</div>
      </div>
    </div>
  );
};

export default Newspaper; 

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './newspaper.css';

// const newsData = [
//   { 
//     title: "Mental Health Awareness Rises", 
//     content: "More people are becoming aware of mental health issues, leading to an increase in discussions and resources available to those in need.", 
//     id: 0, 
//     image: "mental.png",  
//   },
//   { 
//     title: "Innovative Therapy Techniques", 
//     content: "New therapy techniques, such as virtual reality and AI-driven approaches, are revolutionizing the mental health field.", 
//     id: 1, 
//     image: "/friends.png",
//     delay: 5,
//     index: 6
//   },
//   { 
//     title: "Combating Burnout in the Workplace", 
//     content: "Employers are increasingly focusing on strategies to combat burnout, including mental health days and wellness programs.", 
//     id: 2, 
//     image: "/friends.png",
//     delay: 10, 
//     index: 5
//   },
//   { 
//     title: "The Importance of Self-Care", 
//     content: "Self-care is being recognized as a crucial component of mental health, with more resources available to guide individuals.", 
//     id: 3, 
//     image: "/friends.png",
//     delay: 15, 
//     index: 4 
//   },
//   { 
//     title: "Mental Health in Schools", 
//     content: "Schools are integrating mental health education into their curricula, helping students understand and manage their emotions better.", 
//     id: 4, 
//     image: "/friends.png",
//     delay: 20,
//     index: 3
//   },
//   { 
//     title: "Addressing Anxiety in Teens", 
//     content: "Rising levels of anxiety among teenagers are being addressed through innovative programs and support systems.", 
//     id: 5, 
//     image: "/friends.png",
//     delay: 25,
//     index: 2
//   },
//   { 
//     title: "Support for Postpartum Depression", 
//     content: "New support groups and treatment options are emerging for mothers experiencing postpartum depression.", 
//     id: 6, 
//     image: "/friends.png",
//     delay: 30,
//     index: 1  
//   }, 
// ];

// const Newspaper = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [zIndex, setZIndex] = useState(newsData.map(page => page.index)); 
//   const [isFlipping, setIsFlipping] = useState(false); 

//   const handleNext = () => {
//     if (currentPage < newsData.length - 1 && !isFlipping) {
//       setIsFlipping(true);
//       handleAnimationUpdate(currentPage + 1);
//       setCurrentPage((prev) => prev + 1);
//       setTimeout(() => setIsFlipping(false), 1000);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0 && !isFlipping) {
//       setIsFlipping(true);
//       handleAnimationUpdate(currentPage - 1);
//       setCurrentPage((prev) => prev - 1);
//       setTimeout(() => setIsFlipping(false), 1000);
//     }
//   };

//   const handleAnimationUpdate = (pageId) => {
//     setZIndex((prevZIndex) => {
//       const newZIndex = [...prevZIndex];
//       const index = newsData.findIndex((page) => page.id === pageId);
//       if (index !== -1) {
//         newZIndex[index] = newsData.length - index; 
//       }
//       return newZIndex;
//     });
//   };

//   const firstPage = newsData.filter(page => page.id === 0);

//   const page1 = firstPage.map(page => (
//     <div key={page.id} className='page1'>
//       <a>
//         <img src={page.image} alt="not found" />
//       </a>
//       <a>{page.title}</a>
//       <p>{page.content}</p>
//     </div>
//   )); 

//   const rest = newsData.filter(page => page.id !== 0);
  
//   const pages = rest.map(page => (
//     <motion.div 
//       key={page.id} 
//       className='page'
//       style={{
//         transformStyle: 'preserve-3d',
//         transformOrigin: 'left',
//         zIndex: zIndex[rest.findIndex(p => p.id === page.id)]
//       }} 
//       initial={{ rotateY: 0 }}
//       animate={currentPage === page.id ? { rotateY: 180 } : { rotateY: 0 }} // Add animation
//       transition={{ duration: 1 }} // Duration of the animation
//     > 
//       <a>
//         <img src={page.image} alt="not found" />
//       </a>
//       <a>{page.title}</a>
//       <p>{page.content}</p>
//     </motion.div>
//   ));

//   return ( 
//     <div className='newsPaper'>
//       <div className='overlay3'>
//         <div className='previous' onClick={handlePrevious}>
//           <img src="/arrow1.png" alt="not found" />
//         </div>
//         <div className='next' onClick={handleNext}>
//           <img src="/arrow1.png" alt="not found" /> 
//         </div>
//       </div>
//       <div className='newsp'>
//         <div className='backPageSection'>{page1}</div>
//         <div className='frontPageSection'>{pages}</div>
//       </div>
//     </div>
//   );
// };

// export default Newspaper; 
