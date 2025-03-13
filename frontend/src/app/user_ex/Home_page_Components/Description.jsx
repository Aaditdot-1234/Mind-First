import React from 'react';

const Description = () => {
  return (
    <div className="w-full bg-[#2c2f64] flex flex-col items-center justify-around py-10">
      <div className="w-[95%] border-t border-white"></div>
      <div className="w-full flex items-center justify-between px-[2.5%]">
        <div className="w-[40%] flex flex-col items-start mt-12">
          <h1 className="text-white text-2xl font-bold">Mind First</h1>
          <div className="flex items-center gap-4 my-5">
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6 invert brightness-100" />
            <img src="/insta.png" alt="Instagram" className="w-6 h-6 invert brightness-100" />
            <img src="/twitter.png" alt="Twitter" className="w-6 h-6 invert brightness-100" />
            <img src="/yt.png" alt="YouTube" className="w-6 h-6 invert brightness-100" />
          </div>
          <label className="text-white">Copyright © 2024 ASK Project</label>
        </div>
        <div className="w-[60%] flex flex-col items-end gap-28 mt-12">
          <label className="text-white text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt vel ab inventore quod eaque consequuntur dicta iusto voluptatem expedita adipisci, impedit suscipit quia accusantium odit aspernatur! Ratione, nisi dignissimos.
          </label>
          <div className="flex gap-8">
            <a href="#" className="text-[#646cff]">Privacy Policy</a>
            <a href="#" className="text-[#646cff]">Terms and Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;