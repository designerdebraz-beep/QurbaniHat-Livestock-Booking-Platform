import React from 'react';
import { FaCheckCircle, FaHeartbeat, FaBalanceScale, FaHandshake } from 'react-icons/fa';

const QurbaniTips = () => {
  const tips = [
    {
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
      title: "Physical Health",
      desc: "Ensure the animal is active, eyes are bright, and it's free from any physical defects or wounds."
    },
    {
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
      title: "Age Verification",
      desc: "Check the teeth! Cows must be at least 2 years old, and goats should be at least 1 year old."
    },
    {
      icon: <FaBalanceScale className="text-amber-500 text-3xl" />,
      title: "Weight & Build",
      desc: "Look for a well-fleshed body. The spine and ribs shouldn't be overly prominent."
    },
    {
      icon: <FaHandshake className="text-blue-500 text-3xl" />,
      title: "Ethical Sourcing",
      desc: "Choose animals raised on organic feed without harmful growth hormones."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Essential Qurbani Tips</h2>
          <p className="text-gray-600 mt-4">Make an informed decision for your sacred sacrifice.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;