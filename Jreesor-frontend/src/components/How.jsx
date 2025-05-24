import React from 'react';

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
      icon: <SearchSVGIcon/>,
      title: "Assessment",
      description: "We evaluate your outstanding debts and tailor a recovery strategy."
    },
    {
      icon: <GroupSVGIcon/>,
      title: "Contact Debtor",
      description: "Our team reaches out professionally to negotiate and collect."
    },
    {
      icon:<SavingSVGIcon/>,
      title: "Recovery",
      description: "We work diligently to recover your owed funds quickly and ethically."
    },
    {
      icon: <CustomSVGIcon/>,
      title: "Reporting",
      description: "Receive detailed updates and transparent reporting on progress."
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-serif text-center mb-12 tracking-wide">
        How It Works 
      </h2>
      <div className="relative flex flex-col md:flex-row   justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col  items-center text-center md:w-1/4 px-4 mb-12 md:mb-0">
            <div >
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
            {/* Connector line for desktop */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-1/2 transform translate-x-full w-24 border-t-4 border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
