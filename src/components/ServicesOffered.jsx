import React from 'react';
import { Utensils, UserCheck, Truck, Droplet } from 'lucide-react';

const ServiceItem = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="w-12 h-12 mb-2 text-white" />
    <h3 className="font-bold mb-1 text-lg md:text-xl">{title}</h3>
    <p className="text-sm md:text-base">{description}</p>
  </div>
);

const ServicesOffered = () => {
  return (
    <div className="bg-[#6BBF0D] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-black text-center">
        Services Offered
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-4">
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
    </div>
  );
};

export default ServicesOffered;
