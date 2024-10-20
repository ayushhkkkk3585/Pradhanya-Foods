import React from "react";

const ClientSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:p-10 text-center p-10 sm:p-6 lg:p-8 lg:mx-8 md:text-left font-bold mb-12 text-brown-800 inter-bold">
        Our Clients!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/iitb.png" alt="IITB" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/Mahavir-Hospital-logo.png" alt="Mahavir Hospital" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/gurunanak.png" alt="Guru Nanak" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/apex.png" alt="Apex" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/ambuja.png" alt="Ambuja" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/aims_logo_iso.png" alt="AIMS" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;