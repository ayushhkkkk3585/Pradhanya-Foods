import React from "react";
import bgimage from "../../public/background.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Framer Motion Variants for Pop-in Animation
const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <>
      <div
        className="h-full  w-full p-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex flex-col justify-center items-center">
          {/* Animated Heading */}
          <motion.h2
            className="text-[#FFC450] text-center inter-bold text-3xl"
            initial="hidden"
            animate="visible"
            variants={popIn}
          >
            Place Your Orders Now!!{" "}
          </motion.h2>
          
          {/* Animated Text */}
          <motion.p
            className="text-[#9F9FB1] text-center text-xl mt-3"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            variants={popIn}
          >
            The needs of the customers are clearly understood and their
            requirements are fulfilled on the basis of mutually agreed menu
            specifications
          </motion.p>
          
          {/* Animated Contact Info */}
          <motion.p
            className="text-white mt-4"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            variants={popIn}
          >
            Contact: - 9870948305 9892407489
          </motion.p>
          
          <motion.p
            className="text-white mt-4"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            variants={popIn}
          >
            pradhnyafoods@gmail.com
          </motion.p>
        </div>
        
        {/* Footer Section */}
        <footer className="bg-transparent gap-10 text-white mt-20">
          <motion.div
            className="container mx-auto flex flex-col md:flex-row justify-between items-center"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            variants={popIn}
          >
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            <div className="text-sm mt-4 md:mt-0">
              &copy;{new Date().getFullYear()}, All rights reserved.
            </div>
            
            {/* Social Icons with Pop Animations */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  className="hover:text-gray-400 transition-colors duration-300"
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 + idx * 0.2 }} // Staggered animation for each icon
                  variants={popIn}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
