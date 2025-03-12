"use server"
import { Navbar } from '../Navbar/page'; 

const NavbarWrapper = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col bg-background">
      <Navbar />
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default NavbarWrapper