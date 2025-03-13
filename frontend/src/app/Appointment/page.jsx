import React from 'react';
import { motion } from 'framer-motion';

const Appointment = ({ initial, whileInView, transition, viewport, className, display}) => {
  return (
    <div className={`${display || ''}`}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        viewport={viewport}
        className={`h-[40%] w-[80%] bg-white rounded-[25px] flex flex-row shadow-appointment ${className || ''}`}
      >
        <div className="h-full w-[40%] bg-gray-200 rounded-l-[25px] flex flex-col items-center justify-center">
          <div className="h-[20%] w-[80%] flex flex-col items-start">
            <h1 className="text-xl font-bold">Need more help?</h1>
            <p className="text-lg font-medium">
              Consequat pede primis placerat senectus hac molestie et ultricies eros
            </p>
          </div>
          <div className="h-[0px] w-[80%] border-b border-gray-400 my-2"></div>
          <div className="h-[20%] w-[80%]">
            <h1 className="text-lg font-semibold">Customer Service</h1>
            <p className="text-md">888-7337-234</p>
          </div>
          <div className="h-[20%] w-[80%]">
            <h1 className="text-lg font-semibold">Ticket Support</h1>
            <p className="text-md">Send Now!</p>
          </div>
          <div className="h-[20%] w-[80%]">
            <h1 className="text-lg font-semibold">Opening Hours</h1>
            <p className="text-md">Monday – Saturday</p>
            <p className="text-md">(10:30 AM – 7:00 PM)</p>
          </div>
        </div>
        <div className="h-full w-[60%] flex flex-col items-start justify-center">
          <div className="h-[350px] w-full rounded-r-[25px] grid grid-cols-2 grid-rows-3 gap-x-8 px-[90px] pt-[70px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">First name</h4>
              <input type="text" placeholder="First Name" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Last name</h4>
              <input type="text" placeholder="Last Name" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Phone</h4>
              <input type="text" placeholder="Phone" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">E-Mail</h4>
              <input type="text" placeholder="E-mail" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Date</h4>
              <input type="text" placeholder="dd-mm-yyyy" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Time</h4>
              <input type="text" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
          </div>
          <div className="flex flex-col gap-3 ml-[90px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Message</h4>
              <textarea placeholder="Message" className="h-[100px] w-[400px] bg-gray-100 border border-gray-400 rounded-lg p-2 text-md resize-none"></textarea>
            </div>
            <div>
              <button className="flex items-center mt-5 text-lg font-semibold px-6 py-3 rounded-full text-white bg-indigo-500 gap-2 hover:bg-indigo-600">
                <img src="/appoint.png" alt="icon" className="h-6 w-6" />
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Appointment;
