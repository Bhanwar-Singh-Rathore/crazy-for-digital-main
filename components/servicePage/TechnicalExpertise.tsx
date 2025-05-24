/* eslint-disable react/prop-types */
import Image from "next/image";

function TechnicalExpertise({ technologiesStack, title }) {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-wrap justify-center w-full mt-40 px-6">
        <div className="w-full lg:w-1/2 px-4">
          <p className="text-4xl font-semibold mb-4">
            Technical Expertise Of Our {title} Services
          </p>
          <p className="mb-16 text-lg font-light text-gray-700 dark:text-gray-300">
            We are a top-notch {title} company in India that works to build
            customized, result-oriented, and high-performing mobile applications
            by deploying the latest technologies, frameworks, and languages.
          </p>
          <Image
            className="object-fill w-full rounded-lg"
            src={''}
            alt="Technical expertise"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <div className="grid grid-cols-1 gap-8">
            {technologiesStack.map((tech, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-100">
                  {tech.category}
                </h3>
                <ul className="flex flex-wrap text-gray-700 dark:text-gray-300 gap-4">
                  {tech.items?.map((item, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 py-2 rounded-md px-3 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalExpertise;
