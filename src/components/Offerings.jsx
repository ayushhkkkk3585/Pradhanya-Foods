import React from "react";
import { motion } from "framer-motion";

const offeringsData = [
  { type: "SALAD", image: "/IndianThali.png" },
  { type: "SALAD", image: "/Plate.png" },
  { type: "SALAD", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Plate.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
];

// Animation Variants for Section and Offering Cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const OfferingCard = ({ type, image }) => (
  <motion.div
    className="relative w-72 h-72 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
    variants={cardVariants}
  >
    <img src={image} alt={type} className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 h-7 bg-brown-800 bg-opacity-80 text-white">
      <span className="font-bold block text-center text-sm sm:text-base bg-[#3A1101] py-2 px-4">
        {type}
      </span>
    </div>
  </motion.div>
);

const Offerings = () => {
  return (
    <motion.div
      className="max-w-full bg-white p-4 md:p-6 lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-0 px-4 md:px-6 lg:px-8"
            variants={cardVariants}
          >
            Our Offerings
          </motion.h2>
          <motion.button
            className="bg-[#3A1101] text-white px-2 py-2 rounded hover:bg-brown-900 transition-colors duration-300 text-sm sm:text-base lg:px-8 lg:mr-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={cardVariants}
          >
            VIEW MORE
          </motion.button>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
          variants={containerVariants}
        >
          {offeringsData.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Offerings;
