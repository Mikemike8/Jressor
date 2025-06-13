
import { DollarSign, Settings, Truck } from "lucide-react";
import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/men-driver-near-lorry-truck-man-owner-truck-driver-near-truck-man-trucker-trucking-owner-transportation-industry-vehicles-handsome-man-driver-front-truck_255667-68210.jpg';
import "./AboutUsBanner.css";
import { FaTruck } from 'react-icons/fa';
import { Who } from "../components/Who";


export const About = () => {
    const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <Who/>

 


{/* SEPARATOR */}
<section className="flex flex-col items-center py-8 bg-[#2C2A28] text-white">
  <h2 className="text-2xl md:text-3xl font-ebgaramond font-bold mb-8">
    Why carriers choose Reesor Associates
  </h2>

  <div className="flex flex-col md:flex-row font-ebgaramond gap-6 text-center">
    <div className="flex-1 flex flex-col items-center">
      <DollarSign className="text-4xl text-white mb-2" />
      <h3 className="font-semibold text-lg mb-2">Knowledge of Relevant Case Law</h3>
      <p className="text-sm text-gray-300 max-w-xs mx-auto">
          We understand that decades of case precedent bind shippers to carriers under the Bill of Lading, even when brokers are involved. Our deep expertise ensures carriers can pursue the payments they’re owed.
       </p>
    </div>

    <div className="flex-1 flex flex-col  font-ebgaramond items-center">
      <Settings className="text-4xl text-white mb-2" />
      <h3 className="font-semibold text-lg mb-2">Federal and State Statutory Law</h3>
      <p className="text-sm text-gray-300 max-w-xs mx-auto">
         We navigate complex federal and state statutes to identify liable parties and protect carrier rights in every freight transaction.
     </p>
    </div>

    <div className="flex-1 flex flex-col font-ebgaramond items-center">
      <Truck className="text-4xl text-white mb-2" />
      <h3 className="font-semibold max-w-xl text-lg mb-2">Terms and Conditions in the BOL</h3>
      <p className="text-sm text-gray-300  max-w-xs mx-auto">
        The BOL is a binding legal document that creates a direct relationship between shipper and carrier. We ensure its terms and conditions are leveraged to secure your payments and resolve disputes.
      </p>
    </div>
  </div>
</section>



<div className="relative overflow-hidden bg-white">
  <div className="bg-[#2C2A28] text-white flex flex-wrap gap-12 p-8 shadow-lg">
    {/* Inner section with reversed skew removed */}
       <section className="relative w-full h-auto md:h-[600px] flex flex-col md:flex-row overflow-hidden">
         {/* Left: Skewed Image */}
         <div className="relative w-full md:w-1/2 transform scale-110 -skew-x-6 overflow-hidden">
           <div
             className="absolute inset-0 skew-x-6"
             style={{
               backgroundImage: `url(${backgroundImage})` ,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               width: '100%',
               height: '100%',
             }}
           ></div>
         </div>
   
         {/* Right: Text */}
         <div className="w-full md:w-1/2 bg-[#2C2A28] flex items-center justify-center px-6 py-12 md:p-12 text-center">
           <div className="max-w-lg">
             <h2 className="font-ebgaramond  text-[#C0B9AA] text-xl mb-2 text-white  uppercase tracking-widest">
               Our Approach
             </h2>
             <h1 className="font-ebgaramond font-extrabold text-4xl mb-6 leading-tight text-white">
               Committed to Excellence
             </h1>
             <p className="font-ebgaramond font-medium text-lg leading-relaxed text-white whitespace-pre-line overflow-y-auto max-h-[280px] pr-2">
               {`At Reesor & Associates, we go beyond traditional legal counsel. Our team delves into the complexities of transportation law and the realities faced by carriers, brokers, and shippers alike. By combining in-depth knowledge with real-world experience, we craft innovative strategies that protect our clients' interests and pave the way for success.
   
   Our holistic approach ensures no detail is overlooked — because in this industry, every detail matters. Trust us to stand by your side and provide the clarity and results you deserve.`}
             </p>
           </div>
         </div>
       </section>
  </div>
</div>


    </>
  );
};
