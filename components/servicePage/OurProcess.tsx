import React from 'react';

const OurProcess = ({ steps }) => {
  return (
    <div className="bg-gray-50 dark:bg-bg-color-dark py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Features</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          From discovery to launch, our process is built for speed, clarity, and growth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 flex flex-col items-center"
            >
              <div className="absolute -top-3 w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
         <p className="text-gray-600 dark:text-gray-300 mt-8">
          Every step is designed to keep you involved, informed, and moving forward.
        </p>
      </div>
    </div>
  );
};

export default OurProcess;
