"use client"; 

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { signOut, signIn } from "next-auth/react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const buttons = {
  depression:{
    name: 'Depression'
  },
  anxiety: {
    name: 'Anxiety',
  },
  stress: {
    name: 'Stress',
  },
  bipolar: {
    name: 'Bipolar Disorder',
  },
  ptsd: {
    name: 'PTSD',
  },
  ocd: {
    name: 'OCD',
  },
  adhd: {
    name: 'ADHD',
  },
};

export function Navbar() {
  const { data: session, status } = useSession();

  const testPageLinks = Object.keys(buttons)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 w-full h-[70px] p-[10px] flex items-center justify-between bg-[aliceblue] shadow-lg z-[100] font-inter">
      <div className="p-2">
        <a href="/" className="text-[35px] font-semibold text-[#646cff]">Mind First</a>
      </div>
      <div className="flex items-center gap-10 px-8">
        <HoverCard>
          <HoverCardTrigger href='/' className="focus:outline-none text-[20px] font-medium text-[#646cff] hover:border-b-[3px] hover:border-primary/90 hover:text-primary/90 py-[18px]">
            Home
          </HoverCardTrigger>
          <HoverCardContent className="bg-[aliceblue] rounded-sm mt-[5px] shadow-lg">
            <div className="flex flex-col">
              <button className="text-[18px] text-[#646cff] font-medium text-center p-2 hover:border-primary/90 hover:text-primary/90" onClick={() => scrollToSection("home")}>Home</button>
              <button className="text-[18px] text-[#646cff] font-medium text-center p-2 hover:border-primary/90 hover:text-primary/90" onClick={() => scrollToSection("news")}>News</button>
              <button className="text-[18px] text-[#646cff] font-medium text-center p-2 hover:border-primary/90 hover:text-primary/90" onClick={() => scrollToSection("brain")}>Brain</button>
              <button className="text-[18px] text-[#646cff] font-medium text-center p-2 hover:border-primary/90 hover:text-primary/90" onClick={() => scrollToSection("appointment")}>Contacts</button>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger href='/testpage' className="focus:outline-none text-[20px] font-medium text-[#646cff] hover:border-b-[3px] hover:border-primary/90 hover:text-primary/90 py-[18px]">
            Test
          </HoverCardTrigger>
          <HoverCardContent className="bg-[aliceblue] rounded-sm mt-[5px] shadow-lg">
            <div className="grid grid-cols-2">
              {testPageLinks.map((key, index) => ( 
                <a key={key} href={`/testpage/${key}`} className="text-[18px] text-[#646cff] font-medium text-center p-2 hover:border-primary/90 hover:text-primary/90">{buttons[key].name}</a> 
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
        {/* <a className="hover:border-b-[3px] hover:border-primary/90 hover:text-primary/90 text-[20px] font-medium text-[#646cff] py-[18px]" href="/recommendation">Recommendation</a> */}
        <a className="hover:border-b-[3px] hover:border-primary/90 hover:text-primary/90 text-[20px] font-medium text-[#646cff] py-[18px]" href="/About">About</a>
        <a className="hover:border-b-[3px] hover:border-primary/90 hover:text-primary/90 text-[20px] font-medium text-[#646cff] py-[18px]" href="/Profile">Profile</a>
      </div>
      {!session?.user ? (
        <div className="mr-8">
          {/* <a href="/login">Login</a> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="text-[19px] bg-[#646cff]" >Login</Button>
            </PopoverTrigger> 
            <PopoverContent className="z-[1000] mt-4 mr-5">
              <h1 className="text-[25px] font-[600] text-popover-foreground">Create an account</h1>
              <p className="text-[12.5px] font-[600] text-popover-foreground">Select one of the following ways</p>
              <br />
              <div className="h-full w-full flex flex-col items-start justify-center gap-5">
                <Button onClick={() => signIn("google")} className="text-[19px] w-full bg-[#646cff]">
                  Google
                  <img src="/google.png" alt="not found" className='h-[19px] w-[19px] filter invert sepia brightness-90 contrast-85'/>
                </Button>
                <Button onClick={() => signIn("facebook")} className="text-[19px] w-full bg-[#646cff]">
                  Facebook
                  <img src="/facebook.png" alt="not found" className='h-[19px] w-[19px] filter invert sepia brightness-90 contrast-85'/>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div className="mr-8">
          {/* <button onClick={() => signOut()}>Logout</button> */} 
          <Button className='bg-[#646cff]' onClick={() => signOut()}>Logout</Button>
        </div>
      )}
    </div>
  );
}
