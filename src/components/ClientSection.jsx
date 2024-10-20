import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ClientSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:p-10 text-center p-10 sm:p-6 lg:p-8 lg:mx-8 md:text-left font-bold mb-12 text-brown-800 inter-bold"
      >
        Our Prominent Clients
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div className="flex flex-col items-center space-y-8" variants={itemVariants}>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/iitb.png" alt="IITB" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/Mahavir-Hospital-logo.png" alt="Mahavir Hospital" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/fortis.webp" alt="fortis" className="max-w-full max-h-full object-contain" />
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-center space-y-8" variants={itemVariants}>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/gurunanak.png" alt="Guru Nanak" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/apex.png" alt="Apex" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/nm-med.png" alt="nm med" className="max-w-full max-h-full object-contain" />
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-center space-y-8" variants={itemVariants}>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/ambuja.png" alt="Ambuja" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/aims_logo_iso.png" alt="AIMS" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/gurunanak-clg.png" alt="AIMS" className="max-w-full max-h-full object-contain" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientSection;