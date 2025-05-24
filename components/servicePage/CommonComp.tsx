import React from 'react';

const CommonComp = () => {
  return (
    <div className="h-auto bg-gray-50 dark:bg-bg-color-dark text-gray-900 dark:text-gray-100 px-6 sm:px-8 py-10 mb-24">
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="text-center lg:text-left lg:w-1/2 mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white mb-4">
            Why Choose Us For Your Needs?
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base text-center lg:text-lg max-w-3xl mx-auto lg:ml-0">
            We specialize in providing top-notch services tailored to your
            unique requirements. Our team of experts ensures that every project
            is delivered with precision, quality, and on time.
          </p>

          <div className="md:flex hidden flex-col lg:flex-row justify-center lg:justify-start items-start gap-6 lg:gap-12 mt-6 lg:mt-8 mb-12">
            <ul className="text-gray-700 dark:text-gray-300 text-sm lg:text-base space-y-4">
              <li className="custom-checkmark">Top industry expertise</li>
              <li className="custom-checkmark">Cost-effective solutions</li>
              <li className="custom-checkmark">Comprehensive project management</li>
              <li className="custom-checkmark">Dedicated support team</li>
            </ul>
            <ul className="text-gray-700 dark:text-gray-300 text-sm lg:text-base space-y-4">
              <li className="custom-checkmark">Flexible engagement options</li>
              <li className="custom-checkmark">Regular progress updates</li>
              <li className="custom-checkmark">Seamless communication</li>
              <li className="custom-checkmark">Ongoing learning & development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonComp;
