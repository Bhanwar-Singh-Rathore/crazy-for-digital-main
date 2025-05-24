import React from 'react';

const DetailPage = () => {
  return (
    <>
      <div className="min-h-[30vh] bg-gray-50 dark:bg-bg-color-dark text-gray-900 dark:text-gray-100 p-6 lg:p-10 mb-24">
        <section className="p-6 lg:p-10 rounded-md mb-10 flex flex-col lg:flex-row items-start">
          <h2 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-6 lg:mb-0 lg:mr-10">
            Get Custom React Native App Development Solutions From ValueCoders
          </h2>
          <div className="text-lg lg:text-xl space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              ValueCoders is a leading provider of custom React Native app
              development solutions. We have experience in delivering
              high-quality, innovative mobility solutions. Our team of experts
              can help you get the most out of this language.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="custom-checkmark">650+ Software developers</li>
                <li className="custom-checkmark">IP rights protection</li>
              </ul>
              <ul className="space-y-2">
                <li className="custom-checkmark">97% Client retention</li>
                <li className="custom-checkmark">Time-zone compatibility</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-6 lg:p-10 bg-white dark:bg-gray-800 rounded-md">
        <section>
          <h2 className="text-xl lg:text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">
            Our Industry Expertise
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
            Being a top-notch React Native development company in India, we
            deploy advanced technologies and cover all industries verticals.
            The industry verticals we cater to are:
          </p>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
