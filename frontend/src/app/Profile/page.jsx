'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/actions/Appointment_fetch');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch('/actions/Appointment_delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }

      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );

      alert('Appointment deleted successfully!');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment. Please try again.');
    }
  };

  return (
    <div className='h-screen w-screen flex flex-col justify-start mt-[100px] bg-white'>
      <div className='h-fit w-fit flex justify-start gap-[125px] ml-20 rounded-[30px] bg-custom-gradient2 p-10'>
        <div>
          <div className='h-[200px] w-[200px] rounded-[50%] bg-blue-950 '></div>
        </div>
        <div className='flex flex-col items-start justify-center text-white'>
          <h1 className='text-[50px] font-[600]'>{session?.user?.name || 'User'}</h1>
        </div>
      </div>
      <h1 className='text-[50px] font-[700] ml-20 mt-20'>Appointments</h1>
      <div className='h-fit w-screen flex flex-col items-center justify-center mt-10'>
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div
              key={index}
              className='h-fit w-[90%] flex items-center justify-around bg-slate-200 rounded-[10px] shadow-2 text-[20px] font-[600] py-[20px] mb-4'
            >
              <p className='w-[5%] flex justify-center'>{index + 1}</p>
              <p className='w-[25%] flex justify-center'>{appointment.doctorName}</p>
              <p className='w-[30%] flex justify-center'>{appointment.message}</p>
              <p className='w-[10%] flex justify-center'>{new Date(appointment.Date).toLocaleDateString()}</p>
              <p className='w-[15%] flex justify-center'>{appointment.timing}</p>
              <button  onClick={() => handleDeleteAppointment(appointment.id)}>
                <img src="/dustbin.png" alt="not found" className='h-[40px] w-[40px]' />
              </button>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;