import React from "react";
import { motion } from "framer-motion";
import { Utensils, UserCheck, Truck, Droplet } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceItem = ({ Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    variants={fadeInUp}
  >
    <Icon className="w-12 h-12 mb-2 text-white" />
    <h3 className="font-bold mb-1 text-lg md:text-xl">{title}</h3>
    <p className="text-sm md:text-base  text-white">{description}</p>
  </motion.div>
);

const ServicesOffered = () => {
  return (
    <motion.div
    id="services"
      className="bg-[#6BBF0D] p-4 mt-3 sm:p-6 lg:p-8 shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl sm:text-2xl font-bold mb-6 text-black  text-center"
        variants={fadeInUp}
      >
        Services Offered
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <ServiceItem
          Icon={Utensils}
          title="Kitchen Facilities"
          description="Great kitchen, top focus on hygiene"
        />
        <ServiceItem
          Icon={UserCheck}
          title="Dedication"
          description="Strong dedication towards the client"
        />
        <ServiceItem
          Icon={Truck}
          title="Logistics"
          description="Ensure Safe transfer Delivery on time"
        />
        <ServiceItem
          Icon={Droplet}
          title="Hygiene"
          description="We maintain hygiene to deliver the best food"
        />
      </div>
    </motion.div>
  );
};

export default ServicesOffered;
