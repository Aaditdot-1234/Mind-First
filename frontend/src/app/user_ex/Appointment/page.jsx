import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ChevronDownCircle } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

const Appointment = ({ initial, whileInView, transition, viewport, className, display}) => {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const [date, setDate] = useState(formattedDate)
  const [open, setOpen] = useState(false)
  const [doctors, setDoctors] = useState([])
  const [name, setName] = useState('')
  const [timing, setTiming] = useState('')

  useEffect(() => {
    fetch("/api/Doctor") 
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const handleDateSelect = (selectedDate) => {
    if (selectedDate) {
      const dayName = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
      
      const selectedDoctor = doctors.find(doc => doc.doctorName === name);
      
      if (selectedDoctor && !selectedDoctor.availableDays.includes(dayName)) {
        alert(`Invalid date selected! Appointments are only available on ${selectedDoctor.availableDays.join(", ")}.`);
        return;
      }
      
      setDate(selectedDate.toLocaleDateString("en-US", options));
      setOpen(false);
      setTiming(selectedDoctor.timing)
    }
  };
  
  console.log(doctors)

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
              <h4 className="text-lg font-medium">Name</h4>
              <input type="text" placeholder="First Name" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <h4 className="text-lg font-medium">Doctors</h4>
              <input type="text" value={name} className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
              <HoverCard>
                <HoverCardTrigger>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1 -translate-x-1/3">
                    <ChevronDownCircle className="h-6 w-6 text-black"/>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="bg-[aliceblue] rounded-sm mt-[5px] shadow-lg">
                  <div className="flex flex-col">
                    {doctors.length > 0 ? (
                      doctors.map((doctor) => (
                        <div onClick={()=>{setName(doctor.doctorName)}} key={doctor.id} className="p-2 hover:bg-gray-200 rounded">
                          {doctor.doctorName}
                        </div>
                      ))
                    ) : (
                      <span>No doctors available</span>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Phone</h4>
              <input type="text" placeholder="Phone" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">E-Mail</h4>
              <input type="text" placeholder="E-mail" className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
            </div>
            {name !== '' ? (
                <div className="flex flex-col gap-2 relative">
                  <h4 className="text-lg font-medium">Date</h4>
                  <div className="relative">
                    <input
                      type="text"
                      value={date}
                      readOnly
                      className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2"
                      />
                  </div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <button
                        onClick={() => setOpen(!open)}
                        className="absolute right-2 top-1/2 transform -translate-y-1 -translate-x-1/3"
                        >
                        <CalendarIcon className="h-6 w-6 text-black" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="center" side='bottom' sideOffset={10} className="w-auto p-0 bg-white border shadow-md rounded-md">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        />
                    </PopoverContent>
                  </Popover>
                </div>
          ): 
          (<div className='h-0'></div>)}
          {name !== '' ? (
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium">Time</h4>
                <input type="text" value={timing} className="h-10 w-[250px] bg-gray-100 border border-gray-400 rounded-lg p-2" />
              </div>
            ): 
            (<div className='h-0'></div>)
          }
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
