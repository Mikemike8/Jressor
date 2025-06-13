import React from 'react';
import Fam from '../assets/trucks-4405895_1280.jpg';
import './service.css';

export const WhoSplit = () => {
  return (
    <section className="relative w-full h-auto md:h-[600px] flex flex-col md:flex-row overflow-hidden">
      {/* Left: Skewed Image */}
      <div className="relative w-full md:w-1/2 transform scale-110 -skew-x-6 overflow-hidden">
        <div
          className="absolute inset-0 skew-x-6"
          style={{
            backgroundImage: `url(${Fam})`,
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
         <h2 className="font-ebgaramond text-xl mb-2 text-white uppercase tracking-widest">
  Why Carriers Choose Reesor
</h2>
<h1 className="font-ebgaramond font-extrabold text-4xl mb-6 leading-tight text-white">
  Trusted Expertise & Proven Results
</h1>
<p className="font-ebgaramond font-medium text-lg leading-relaxed text-white whitespace-pre-line overflow-y-auto max-h-[280px] pr-2">
  {`Carriers choose Reesor because we offer deep knowledge of transportation law tailored to your needs. Our team combines legal expertise with real-world experience to provide proactive solutions that prevent issues before they arise. We prioritize clear communication throughout the process and are committed to delivering results that help your business grow.`}
</p>

        </div>
      </div>
    </section>
  );
};
