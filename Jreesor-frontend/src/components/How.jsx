import React from 'react';
import './service.css';

const CustomSVGIcon = () => (
  <span style={{ fontSize: "2.5rem" }} className="material-symbols-outlined">monitoring</span>
);
const SavingSVGIcon = () => (
  <span style={{ fontSize: "2.5rem" }} className="material-symbols-outlined">savings</span>
);
const GroupSVGIcon = () => (
  <span style={{ fontSize: "2.5rem" }} className="material-symbols-outlined">groups</span>
);
const SearchSVGIcon = () => (
  <span style={{ fontSize: "2.5rem" }} className="material-symbols-outlined">query_stats</span>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchSVGIcon />,
      title: "Assessment",
      description: "We evaluate your outstanding debts and tailor a recovery strategy."
    },
    {
      icon: <GroupSVGIcon />,
      title: "Contact Debtor",
      description: "Our team reaches out professionally to negotiate and collect."
    },
    {
      icon: <SavingSVGIcon />,
      title: "Recovery",
      description: "We work diligently to recover your owed funds quickly and ethically."
    },
    {
      icon: <CustomSVGIcon />,
      title: "Reporting",
      description: "Receive detailed updates and transparent reporting on progress."
    },
  ];

  return (
    <section loading="lazy" className="max-w-full mx-auto px-6 py-32 bg-[#2C2A28]">
      <h2 className="text-4xl text-white font-ebgaramond md:text-5xl font-serif text-center mb-16 tracking-wide">
        Key benefits that set us apart from other firms
      </h2>
      <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-0">
      {steps.map((step, index) => (
  <div key={index} className="relative flex text-white flex-col items-center text-center md:w-1/4 px-4">
    <div className="mb-4">
      {step.icon}
    </div>
    <h3 className="text-lg md:text-xl  text-white font-ebgaramond font-semibold mt-2 mb-2">{step.title}</h3>
    <p className="text-white font-ebgaramond text-sm md:text-base">{step.description}</p>
  </div>
))}
          
      </div>
    </section>
  );
};

export default HowItWorks;
