"use client";

import React from 'react' 
import './Home.css'
import { motion } from 'framer-motion';
import Newspaper from '../Home_page_Components/Newspaper'
import Brain from '../Home_page_Components/Brain';
import Therapist from '../Home_page_Components/Therapist';
import Work from '../Home_page_Components/Working';
import Link from 'next/link';
import Description from '@/app/user_ex/Home_page_Components/Description';

const Home = () => {
  return (
    <div className='home'>
      <div id='home' className='contentWrapper'>
        <div className='underlay'>
          <div></div>
          <img src='/friends.png' alt="friends" />
        </div>
        <div className='overlay'>
          <div>
            <motion.p
              initial={{ opacity:0, x :-100}}
              animate={{ opacity:1, x : 0}}
              transition={{ delay:1, duration: 2, type: 'spring', stiffness: 50}}
            >
              Welcome to Mind First
            </motion.p>
            <h2>Putting 'Mind First' is not selfish; it's essential.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
            <Link href='/testpage'
              style={{
                textDecoration: 'none'
              }}
            >
                <motion.button
                    initial={{ opacity:0, x :-100}}
                    animate={{ opacity:1, x : 0}}
                    transition={{ delay:2, duration: 2, type: 'spring', stiffness: 50}}                
                >
                    TEST
                    <img src='/arrow.png' alt="not found" />
                </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div className='contentWrapper2'>
        <div className='imgContainer'>
          <div>
            <img src="/image1.webp" alt="Not found" />
          </div>
        </div>
        <div></div>
        <div className='aim'>
          <div>
            <div></div>
            <h2>OUR AIM</h2>
          </div>
          <div>
            <h1>We aim to empower individuals to achieve their personal and professional.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div>
            <div></div>
            <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</i></p>
          </div>
          <div>
            <motion.div
              initial={{ opacity:0, x: -100 }}
              whileInView={{ opacity:1, x: 0 }}
              transition={{ duration: 4, type: 'spring', stiffness: 25 }}
              viewport={{ once: true, amount: 0.5 }}               
            >
              <h3>Coaching and Psychologica</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
            <motion.div
                initial={{ opacity:0, x: +200 }}
                whileInView={{ opacity:1, x: 0 }}
                transition={{ duration: 4, type: 'spring', stiffness: 25 }}
                viewport={{ once: true, amount: 0.5 }}   
            >
              <video autoPlay muted loop>
                <source src='/counselling.mp4' type='video/mp4'/>
              </video>
            </motion.div>
          </div>
        </div>
      </div>
      <br /><br />
      <Work/>
      <Therapist/> 
      <div id='news' className='news'>
        <div className='underlay2'>
          <img src="/news.jpg" alt="not found" />
        </div>
        <div className='overlay2'>
          <div className='newsinner'>
            <div></div>
            <span>NEWS</span>
          </div>
          <h1>Check out latest News and updates regarding mental health</h1>
          <br /><br /><br />
          <Newspaper/>
        </div>
      </div>
      <div className='random1'>
        <div className='random1inner'></div>
      </div>
      <Brain/>
      <div className='random2'>
        <div className='random2inner'></div>  
      </div>   
      <div id='appointment' className='appointment'>
        <div className='appointmentinner'>
          <div></div>  
          <div></div>  
        </div> 
        <div className='contacts'>
          <div>
            <div>
              <h2>The professional, licensed, and vetted Psychologist who you can trust</h2>
              <br /><br />
              <span
                style={{
                  fontSize:'20px'
                }}
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div className='team'>
              <p>Our Team</p>
              <div>
                <div></div>
                <div className='left'></div>
                <div className='center'></div>
                <div className='right'></div>
                <div></div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='appointmentform'>
          <motion.div
              initial={{ opacity:0, x :+100}}
              whileInView={{ opacity:1, x : 0}}
              transition={{ delay:1, duration: 3, type: 'spring', stiffness: 50}}
              viewport={{ once: true, amount: 0.5 }}  
              className='motiondiv'          
          >
            <div className='appointform1'>
              <div className='info1'>
                <h1>Need more help?</h1>
                <p>Consequat pede primis placerat senectus hac molestie et ultricies eros</p>
              </div>
              <div className='info2'></div>
              <div>
                <h1>Customer Service</h1>
                <p>888-7337-234</p>
              </div>
              <div>
                <h1>Ticket Support</h1>
                <p>Send Now!</p>
              </div>
              <div>
                <h1>Opening Hours</h1>
                <p>Monday – Saturday</p>
                <p>(10:30 AM – 7:00 PM)</p>
              </div>
            </div>
            <div className='form'>
              <div className='appointform2'>
                <div>
                  <h4>First name</h4>
                  <input type="text" placeholder='First Name'/>
                </div>
                <div>
                  <h4>Last name</h4>
                  <input type="text" placeholder='Last Name'/>
                </div>
                <div>
                  <h4>Phone</h4>
                  <input type="text" placeholder='Phone'/>
                </div>
                <div>
                  <h4>E-Mail</h4>
                  <input type="text" placeholder='E-mail'/>
                </div>
                <div>
                  <h4>Date</h4>
                  <input type="text" placeholder='dd-mm-yyyy'/>
                </div>
                <div>
                  <h4>Time</h4>
                  <input type="text"/>
                </div>
              </div>
              <div 
                style={{
                  display:'flex',
                  flexDirection:'column',
                  gap:'10px',
                  marginLeft:'90px',
                  marginTop: '0px'
                }}
              >
                <div>
                  <h4>Message</h4>
                  <textarea placeholder='Message'></textarea>
                </div>
                <div>
                  <button>
                    <img src="/appoint.png" alt="not found" />
                    Book an appointment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>  
        </div>  
      </div>
      <Description/>
    </div> 
  )
}

export default Home