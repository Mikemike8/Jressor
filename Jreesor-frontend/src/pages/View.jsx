import React, { useState, useEffect } from 'react';
import { ShieldCheck, UserCheck, MessageSquare, CheckCircle ,AlertCircle  , Plus, Minus } from "lucide-react"

import MoneyPile from '../assets/istockphoto-1294453859-170667a.jpg'
import  Eagle from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'

import "./View.css";
const faqs = [
  {
    question: "How often is the Top Debtors list updated?",
    answer:
      "The list is updated weekly to ensure accuracy and relevancy, giving you the most up-to-date insights into outstanding debts.",
  },
  {
    question: "Can I download the debtor information?",
    answer:
      "Yes. You can export the data in various formats including CSV and PDF for reporting and record-keeping.",
  },
  {
    question: "How do you gather and verify debt data?",
    answer:
      "We use a combination of verified reports, financial records, and third-party data providers to ensure all debt entries are accurate.",
  },
  {
    question: "Is the information publicly available?",
    answer:
      "Only verified and non-confidential debt information is shared. We strictly follow legal guidelines and privacy policies.",
  },
];

export const View = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  // State to hold debtor data and error state
  const [debtorData, setDebtorData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch debtor data when the component mounts
  useEffect(() => {
    const fetchData = () => {
      fetch('https://backendressor.onrender.com/api/debtors')  // Your API endpoint for debtor data
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();  // Parse the response as JSON
        })
        .then((data) => {
          data.sort((a, b) => a.Rank - b.Rank);  // Sort data by Rank
          setDebtorData(data);  // Set debtor data in the state
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Error fetching data from the backend. Please try again later.');
        });
    };

    fetchData(); // Call fetchData after defining it
  }, []);  // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#2C2A28] py-12">
<section className="flex flex-col md:flex-row h-auto md:h-[70vh] w-full overflow-hidden">
  {/* Left Side with Slant - only slanted on md+ screens */}
  <div
    className="w-full md:w-1/2 relative h-64 md:h-auto bg-cover bg-center"
    style={{
      backgroundImage: `url(${MoneyPile})`,
      clipPath: 'none',
    }}
  >
    {/* Slant only on larger screens */}
    <div
      className="hidden md:block absolute inset-0"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
        backgroundImage: `url(${MoneyPile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    ></div>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
  </div>

  {/* Right Side - Text Content */}
  <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 ">
    <div className="p-6 sm:p-8 md:p-10 max-w-xl w-full text-left z-20">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-white font-ebgaramond mb-4 sm:mb-6">
        Know Who Owes You Most
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-ebgaramond">
        Our Top Debtors list highlights companies with the most unpaid accounts—giving you the insights you need to protect your business. Stay ahead. Stay informed. Make smarter credit decisions.
      </p>
    </div>
  </div>
</section>






    
        <section className="relative z-10 py-8 ">
           {/* Divider Line with Subtitle */}
  <div className="flex items-center justify-center mb-10">
    <div className="w-full max-w-5xl px-4 flex items-center">
      <hr className="flex-grow border-t border-white/30" />
      <span className="mx-4 text-white font-ebgaramond text-lg tracking-wide uppercase">
        Explore More
      </span>
      <hr className="flex-grow border-t border-white/30" />
    </div>
  </div>
<div className="w-full px-0 max-w-none mx-0">

    <h2 className="text-6xl font-ebgaramond text-white mb-4 font-oswald">Legal Insights & Updates</h2>
    <p className="text-white font-ebgaramond text-lg leading-relaxed">
      Our team of skilled attorneys and legal professionals is dedicated to providing you with top-tier legal support.
    </p>
  </div>
</section>


        <div className="relative">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-center bg-cover"
    style={{
      backgroundImage: `url(${Eagle})`,
      opacity: 0.15,
      zIndex: 0
    }}
  ></div>

  {/* Foreground Content */}
  <div className="relative z-10  py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* Chart Section */}
        <div className="p-8 rounded-xl shadow-xl w-full lg:w-2/3 border border-gray-200 bg-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 w-6 h-6" />
              <h1 className="text-2xl font-ebgaramond text-gray-800">Top Debtors</h1>
            </div>
            <p className="text-gray-500 text-sm font-ebgaramond">Updated Weekly</p>
          </div>

          {/* Display Error or Table */}
          {error ? (
            <p className="text-center bg-red-600 text-white py-2 rounded">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 font-ebgaramond text-sm">
                    <th className="px-6 py-3 border-b ">Rank</th>
                    <th className="px-6 py-3 border-b ">First Name</th>
                    <th className="px-6 py-3 border-b ">Last Name</th>
                    <th className="px-6 py-3 border-b ">Amount Owed</th>
                  </tr>
                </thead>
                <tbody>
                  {debtorData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.Rank || 'N/A'}</td>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.FirstName || 'N/A'}</td>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.LastName || 'N/A'}</td>
                      <td className={`px-6 py-3 border-b text-sm font-medium ${
                        item.AmountOwed > 10000 ? 'text-red-600' :
                        item.AmountOwed > 5000 ? 'text-yellow-600' : 'text-gray-800'
                      }`}>
                        {item.AmountOwed !== undefined ? `$${item.AmountOwed.toLocaleString(undefined, {minimumFractionDigits: 2})}` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Explanation Panel */}
        <div className="w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-ebgaramond text-gray-800 mb-4">What You're Seeing</h2>
          <p className="text-gray-600 text-sm font-ebgaramond leading-relaxed">
            This chart shows a ranked list of individuals with outstanding debts. The <span className="font-medium text-red-600">higher the amount</span>, the more critical the debt.
            <br /><br />
            Debtors are sorted by how much they owe. You can use this list to quickly identify high-risk cases or those who require urgent follow-up.
            <br /><br />
            <span className="font-medium text-yellow-600"> Names </span> indicates people who owe  <span className="font-medium text-red-600">money</span> who are a high risk to conduct business with.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>


   
<section className=" py-16 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-6xl font-ebgaramond text-white  font-oswald mb-4">Our legal services.</h2>
    <p className="text-white font-ebgaramond text-lg">
      Trusted legal guidance backed by a track record of results.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className=" p-6  flex items-start gap-4 ">
      <ShieldCheck className="text-blue-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-ebgaramond  text-white mb-2">Expertise You Can Trust</h3>
        <p className="text-gray-600 font-ebgaramond">
          Our seasoned attorneys bring years of experience across multiple legal areas to provide reliable, results-driven solutions.
        </p>
      </div>
    </div>

    <div className=" p-6  flex items-start gap-4 ">
      <UserCheck className="text-green-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-ebgaramond text-white mb-2">Personalized Service</h3>
        <p className="text-gray-600 font-ebgaramond">
          Every case is unique—our team tailors strategies to meet your needs, ensuring dedicated and individualized support.
        </p>
      </div>
    </div>

    <div className=" p-6  flex items-start gap-4 ">
      <MessageSquare className="text-purple-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-ebgaramond text-white mb-2">Clear Communication</h3>
        <p className="text-gray-600 font-ebgaramond">
          We keep you informed with transparent updates at every stage, so you always know where your case stands.
        </p>
      </div>
    </div>

    <div className="  p-6  flex items-start gap-4 ">
      <CheckCircle className="text-yellow-500  w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-ebgaramond text-white mb-2">Proven Track Record</h3>
        <p className="text-gray-600 font-ebgaramond">
          With a history of successful settlements and court victories, we fight for outcomes that exceed your expectations.
        </p>
      </div>
    </div>
  </div>
</section>

<section className=" py-16 px-4">
  <div className="w-[100%] mx-auto px-4 md:px-8">
    <h2 className="text-4xl md:text-6xl font-ebgaramond text-center mb-10 text-white">
      F A Q
    </h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="  transition-all duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left px-6 py-8"
          >
            <span className="font-semibold font-ebgaramond text-white text-lg flex-1">
              {faq.question}
            </span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-white flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-white flex-shrink-0" />
            )}
          </button>
          <div
            className={`px-6 pb-4 font-ebgaramond text-md text-white overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    
  </div>
  
  
  );
};
