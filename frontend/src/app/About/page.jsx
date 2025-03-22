'use client'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {ReactTyped} from "react-typed";

const About = () => {
    const [doctors, setDoctors] = useState([])
    const controls = useAnimation();
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        fetch("/actions/Doctor_fetch") 
          .then((response) => response.json())
          .then((data) => {
            setDoctors(data);
          })
          .catch((error) => console.error("Error fetching doctors:", error));
    }, []);

    useEffect(() => {
        controls.start({
          transition: { duration: 3, ease: "easeInOut" }
        });

    }, [controls]);

    return (
        <div className='h-fit w-screen pt-[90px] bg-white'>
            <span className="w-full text-left ml-10 text-[70px] font-[600]">
                <ReactTyped 
                    strings={["About us:"]} 
                    typeSpeed={50} 
                    backSpeed={30} 
                    className="w-full text-left ml-14 text-[60px] font-[600]"
                />
            </span>
            <div className='flex flex-col items-center justify-center bg-transparent mt-10'>
                <div className='h-fit w-[90%] bg-gray-200 flex flex-col px-10 pb-16 pt-5 rounded-[50px]'>
                    <h1 className='w-full text-left text-[50px] font-[600]'>FAQ's</h1>
                    <div className='h-fit w-full flex flex-col gap-2 pt-10'>
                        <div>
                            <motion.div 
                                initial={{ opacity:0, x: +100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:1, duration: 0.5 }}
                                className='h-fit w-fit rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                                About our mental health tests
                            </motion.div>
                        </div>
                        <div className='flex justify-end'>
                            <motion.div 
                                initial={{ opacity:0, x: -100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:3, duration: 0.5 }}
                                className='h-fit w-[50%] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                                Our mental health tests are designed to provide an initial assessment of your mental well-being. The process starts with a chatbot that engages in a conversation to detect key indicators of mental health conditions. This is followed by a questionnaire to validate findings. Our tests cover various aspects of mental health, including anxiety, depression, stress, and more. The goal is to provide self-awareness and direct users toward appropriate resources for further support.
                            </motion.div>
                        </div>
                    </div>
                    <div className='h-fit w-full flex flex-col gap-2 pt-10'>
                        <div>
                            <motion.div 
                                initial={{ opacity:0, x: +100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:5, duration: 0.5 }}
                                className='h-fit w-fit rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                                How can online mental health testing help me?
                            </motion.div>
                        </div>
                        <div className='flex justify-end'>
                            <motion.div
                                initial={{ opacity:0, x: -100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:7, duration: 0.5 }}                         
                                className='h-fit w-[50%] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                            Online mental health testing on our website can help you understand potential mental health concerns by analyzing your responses in a structured and scientific manner. The test consists of a chatbot interaction followed by a questionnaire, helping to identify possible mental health conditions. Based on the results, we offer insights and potential consultation choices, guiding you toward professional help if needed. This process is private, accessible, and designed to provide clarity about your mental well-being.
                            </motion.div>
                        </div>
                    </div>
                    <div className='h-fit w-full flex flex-col gap-2 pt-10'>
                        <div>
                            <motion.div
                                initial={{ opacity:0, x: +100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:9, duration: 0.5 }} 
                                className='h-fit w-fit rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                                What do my mental health test results mean?
                            </motion.div>
                        </div>
                        <div className='flex justify-end'>
                            <motion.div
                                initial={{ opacity:0, x: -100 }}
                                animate={{ opacity:1, x:0 }}
                                transition={{ delay:11, duration: 0.5 }}                         
                                className='h-fit w-[50%] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none bg-custom-gradient2 flex flex-col items-start justify-center px-[50px] py-[20px] gap-5 text-white text-[20px]'
                            >
                                Your mental health test results indicate the likelihood of specific mental health conditions based on your responses. The chatbot and questionnaire cross-check symptoms and behavioral patterns to provide a comprehensive analysis. If your results suggest a potential issue, we recommend seeking professional guidance. However, the test is not a medical diagnosis but a tool to help you understand your mental health better and take informed steps toward well-being.
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen w-full flex flex-col items-start justify-center px-[100px] mt-[50px]">
                <h1 className="text-[60px] font-[600]">Collaborated Doctors:</h1>
                <div className="mt-[30px] h-[75%] w-full grid grid-cols-3 grid-rows-3">
                    {doctors.map((doc,index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                        delay: (index*0.2) ,
                        duration: 4,
                        type: "spring",
                        stiffness: 25,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        key={doc.id}
                        className="flex items-center justify-center"
                    >
                        <div
                            className="h-[80px] w-[325px] rounded-[25px] text-white font-semibold text-[20px] cursor-pointer transition-shadow duration-300 px-5 py-4 bg-custom-gradient2 hover:shadow-[0px_0px_20px_5px_rgba(92,95,151,0.75)] flex items-center justify-center"
                        >
                            {doc.doctorName}
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
            <div className="h-fit w-full flex flex-col items-center justify-center px-10 py-16 bg-gray-50 mt-10 rounded-lg shadow-lg">
                <div className="w-full max-w-[900px] text-left mb-16">
                    <h2 className="text-[50px] font-[600] mb-4">Why Trust Us?</h2>
                    <p className="text-[20px] text-gray-600">
                        We prioritize data privacy and ensure that your information remains confidential. 
                        Our mental health tests are designed with high reliability and scientific validation 
                        to provide accurate and meaningful insights. We follow strict data protection policies 
                        and never share user information without consent.
                    </p>
                </div>
                <div className="w-full max-w-[900px] text-left mb-16">
                    <h2 className="text-[50px] font-[600] mb-4">Our Vision & Future Goals</h2>
                    <p className="text-[20px] text-gray-600">
                        Our mission is to improve mental health awareness and accessibility. In the future, 
                        we aim to introduce AI-driven diagnostic tools, real-time mental health tracking, 
                        and integration with professional counseling services to provide a more comprehensive 
                        mental health support system.
                    </p>
                </div>
                <div className="w-full max-w-[900px] text-left">
                    <h2 className="text-[50px] font-[600] mb-4">Contact Information</h2>
                    <p className="text-[20px] text-gray-600">
                        If you have any questions or need support, feel free to reach out to us:
                    </p>
                    <ul className="mt-4 text-[20px] text-gray-600">
                        <li>Email: support@mentalhealth.com</li>
                        <li>Phone: +91-1234567890</li>
                        <li>Address: Navi Mumbai, Maharashtra, India</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About