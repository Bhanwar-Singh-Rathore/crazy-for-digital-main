import Link from 'next/link';
import React from 'react';

const TechnologySection = () => {
  const services = [
    {
      id: 1,
      title: 'Dedicated Machine Learning & AI',
      description:
        'You can access exceptional skills and distinctive knowledge by enlisting our committed Machine Learning & AI at affordable prices. Our hiring plans are simple and adaptable, allowing you to choose your preferred team on an hourly, part-time, or full-time basis.',
      link: 'machine-learning-ai',
    },
    {
      id: 2,
      title: 'React Native Consulting',
      description:
        'Leverage our React Native consulting solutions to obtain a comprehensive project plan and framework for developing a mobile application with a native appearance and user experience utilizing Agile methodology.',
      link: 'react-native-developers',
    },
    {
      id: 3,
      title: 'Mobile App Backend & API Development',
      description:
        "We offer complete backend and API development solutions for React Native-based mobile applications. Our engineers possess expertise in Node.js, PHP, and Python to develop personalized backend and API services to cater to your mobile application's requirements.",
      link: 'mobile-app',
    },
    {
      id: 4,
      title: 'Web Application Development',
      description:
        'Build secure, scalable, and responsive web applications tailored to your business needs using the latest technologies and frameworks.',
      link: 'web-development',
    },
    {
      id: 5,
      title: 'UIUX Design Services',
      description:
        'Create intuitive and visually appealing designs that enhance user experiences and ensure customer satisfaction.',
      link: 'ui-ux-design',
    },
    {
      id: 6,
      title: 'DevOps Implementation',
      description:
        'Streamline your software development lifecycle with our comprehensive DevOps strategies and tools for continuous integration and delivery.',
      link: 'devops',
    },
    {
      id: 7,
      title: 'Cloud Computing Solutions',
      description:
        'Leverage cloud platforms like AWS, Azure, and Google Cloud to deploy and manage scalable and cost-effective applications.',
      link: 'cloud-computing',
    },
    {
      id: 8,
      title: 'E-commerce Development',
      description:
        'Launch feature-rich e-commerce platforms with seamless integrations for payment gateways and product management.',
      link: 'e-commerce',
    },
    {
      id: 9,
      title: 'IoT Development Services',
      description:
        'Connect and manage IoT devices with our innovative development solutions tailored for smart homes, healthcare, and industrial automation.',
      link: 'iot',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our team delivers tailored solutions in AI, mobile, cloud, and full-stack development to support your digital transformation from concept to deployment.
            </p>
          </div>

          <div className="md:col-span-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="mb-4 border-t border-gray-200 dark:border-gray-700 pt-4 group transition duration-300 hover:pl-2"
              >
                {/* Uncomment the Link wrapper if needed */}
                {/* web-development */}
                <Link href={`/services/${service.link}`} className="block">
                  <div className="flex items-center">
                    <div className="w-5 mr-3 text-blue-600 dark:text-blue-400 transition-transform transform group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg transition-colors duration-200 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {service.title}
                    </h3>
                  </div>
                  <div className="pl-8 mt-2">
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
