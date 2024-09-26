import React from "react";
import { motion } from "framer-motion";

const Mason = () => {
  return (
    <div className="bg-[#FFC450] w-full h-full flex flex-col lg:flex-row-reverse lg:justify-between overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center text-center p-4 lg:p-8 lg:w-1/3 min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl inter-bold md:text-4xl lg:text-5xl mb-4">
          Glimpse Of US
        </h1>
        <h2 className="text-base md:text-xl lg:text-2xl">
          "Want to satisfy your cravings? Don't worry, Pradhanya is here"
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-start lg:w-2/3 p-2 lg:p-4">
        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 5.png"
            alt="Frame 1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 5.png"
            alt="Frame 2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 4.png"
            alt="Frame 3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 5.png"
            alt="Frame 4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 5.png"
            alt="Frame 5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-1/2 sm:w-1/3 p-1 lg:p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg"
            src="/Frame 5.png"
            alt="Frame 6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mason;