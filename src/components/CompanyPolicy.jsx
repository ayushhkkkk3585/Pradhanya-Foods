import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CompanyPolicy = () => {
  return (
    <div className="max-w-full bg-white p-10 sm:p-6 lg:p-8 lg:mx-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-brown-800 inter-bold text-left">
          Company Policy
        </h1>

        <div className="space-y-16">
          {/* Vision Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <img
              src="/footer-biryani.png"
              alt="Biryani dish"
              className="w-64 h-64 rounded-full object-contain"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-brown-700 inter-semibold">
                Vision
              </h2>
              <p className="lg:text-3xl sm:text-xl md:text-2xl text-gray-700 leading-relaxed inter-regular">
                "To become a customer-focused Hospitality company with an objective to
                provide high-quality catering services and support service to our valued
                customers."
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <img
              src="footer-southThali.png"
              alt="South Indian Thali"
              className="w-64 h-64 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-brown-700 inter-semibold">
                Mission
              </h2>
              <p className="lg:text-3xl sm:text-xl md:text-2xl text-gray-700 leading-relaxed inter-regular">
                "The company would continuously endeavor to remain in step with the times,
                positively responding to changes in the business environment for a
                leadership position in the industry, a vision crucial to the growth in
                terms of market niche."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;
