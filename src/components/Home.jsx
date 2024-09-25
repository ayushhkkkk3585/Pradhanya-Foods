import React from "react";
import NavbarSimple from "./NavbarSimple"; // Make sure this path is correct
import Navbar2 from "./Navbar2";

const Home = () => {
  return (
    <>
      {/* <NavbarSimple/> */}
      <Navbar2 />
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center  h-screen -mt-36 overflow-hidden">
        <div className="text-center md:text-left mb-4 md:mt-32 p-10 md:p-10 md:text-6xl md:py-10 inter-bold leading-relaxed flex flex-col md:gap-7">
          <span className="block">DISCOVER</span>
          <span className="block text-[#6BBF0D]">NUTRITIONAL EXCELLENCE</span>
          <span className="block">with Pradhnya Foods</span>
        </div>

        <img
          className="md:ml-4 z-[-1] transform translate-x-10 md:translate-x-20 md:-rotate-45 md:translate-y-1 md:scale-[1.2] lg:scale-[1.5] object-cover"
          src="/home-mob-svg.svg"
          alt="Pradhnya Foods"
        />
      </div>
    </>
  );
};

export default Home;
