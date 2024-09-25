import React, { useState } from "react";
import { motion } from "framer-motion";

// Offering data (can be repeated or replaced with more data)
const offeringsData = [
  { type: "SALAD", image: "/IndianThali.png" },
  { type: "SALAD", image: "/Plate.png" },
  { type: "SALAD", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Plate.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
  { type: "SALAD", image: "/IndianThali.png" },
  { type: "SALAD", image: "/Plate.png" },
  { type: "SALAD", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
  { type: "THALI", image: "/Plate.png" },
  { type: "THALI", image: "/Thali.png" },
  { type: "THALI", image: "/Punjabi-Thali.png" },
  // More offerings can be added here for multiple pages
];

// Animation Variants for Section and Offering Cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Single Offering Card Component with Hover Animations
const OfferingCard = ({ type, image }) => (
  <motion.div
    className="relative w-72 h-72 rounded-lg overflow-hidden shadow-md transition-transform duration-300"
    variants={cardVariants}
    whileHover={{
      scale: 1.1, // Scale up on hover
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add shadow on hover
    }}
    whileTap={{ scale: 0.95 }} // Slight scale down on tap (for mobile)
  >
    <img src={image} alt={type} className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 h-7 bg-brown-800 bg-opacity-80 text-white">
      <span className="font-bold block text-center text-sm sm:text-base bg-[#3A1101] py-2 px-4">
        {type}
      </span>
    </div>
  </motion.div>
);

// Main Offerings Component with Pagination
const Offerings = () => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const totalPages = Math.ceil(offeringsData.length / itemsPerPage); // Total number of pages

  // Function to get current page offerings
  const currentOfferings = offeringsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-full bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-0 px-4 md:px-6 lg:px-8">
            Our Offerings
          </h2>
        </div>

        {/* Offerings Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentOfferings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`bg-[#3A1101] text-white px-4 py-2 rounded-l ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {"<"}
          </button>
          <span className="px-4 py-2 text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-[#3A1101] text-white px-4 py-2 rounded-r ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
