import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "./Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <div
        id="home"
        className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen -mt-24 overflow-hidden"
      >
        {/* Text Animation */}
        <motion.div
          className="text-center md:text-left mb-4 md:mt-16 lg:mt-20 p-10 md:p-10 md:text-6xl md:py-10 inter-bold leading-relaxed flex flex-col md:gap-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="block text-3xl md:text-4xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            DISCOVER
          </motion.span>
          <motion.span
            className="block text-3xl md:text-4xl lg:text-6xl text-[#6BBF0D]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            NUTRITIONAL EXCELLENCE
          </motion.span>
          <motion.span
            className="block text-3xl md:text-4xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            with Pradhnya Foods
          </motion.span>
        </motion.div>

        {/* Image Animation */}
        <img
          className="md:ml-4 z-[-1] transform translate-x-10 md:translate-x-28  lg:-translate-y-14  md:-rotate-45 md:translate-y-1 md:scale-[1.2] lg:scale-[1.8] object-cover"
          src="/home-mob-svg.svg"
          alt="Pradhnya Foods"
        />
      </div>
    </>
  );
};

export default Home;
