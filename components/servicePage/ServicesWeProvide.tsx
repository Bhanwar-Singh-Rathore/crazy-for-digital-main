// components/ServicesWeProvide.tsx
import Link from "next/link";

function ServicesWeProvide() {
  const services = [
    {
      title: "Dedicated Machine Learning & AI",
      description:
        "You can access exceptional skills and distinctive knowledge by enlisting our committed Machine Learning & AI at affordable prices. Our hiring plans are simple and adaptable, allowing you to choose your preferred team on an hourly, part-time, or full-time basis.",
      path: "/machine-learning-ai",
    },
    {
      title: "React Native Consulting",
      description:
        "Leverage our React Native consulting solutions to obtain a comprehensive project plan and framework for developing a mobile application with a native appearance and user experience utilizing Agile methodology.",
      path: "/react-native-developers",
    },
    {
      title: "Mobile App Backend & API Development",
      description:
        "We offer complete backend and API development solutions for React Native-based mobile applications. Our engineers possess expertise in Node.js, PHP, and Python to develop personalized backend and API services to cater to your mobile application's requirements.",
      path: "/mobile-app",
    },
    {
      title: "Web Application Development",
      description:
        "Build secure, scalable, and responsive web applications tailored to your business needs using the latest technologies and frameworks.",
      path: "/web-development",
    },
    {
      title: "UI/UX Design Services",
      description:
        "Create intuitive and visually appealing designs that enhance user experiences and ensure customer satisfaction.",
      path: "/ui-ux-design",
    },
    {
      title: "DevOps Implementation",
      description:
        "Streamline your software development lifecycle with our comprehensive DevOps strategies and tools for continuous integration and delivery.",
      path: "/devops",
    },
    {
      title: "Cloud Computing Solutions",
      description:
        "Leverage cloud platforms like AWS, Azure, and Google Cloud to deploy and manage scalable and cost-effective applications.",
      path: "/cloud-computing",
    },
    {
      title: "E-commerce Development",
      description:
        "Launch feature-rich e-commerce platforms with seamless integrations for payment gateways and product management.",
      path: "/e-commerce",
    },
    {
      title: "IoT Development Services",
      description:
        "Connect and manage IoT devices with our innovative development solutions tailored for smart homes, healthcare, and industrial automation.",
      path: "/iot",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0f172a] text-black dark:text-white py-16">
      <div className="flex items-center justify-center my-8 mb-24">
        <div className="h-px bg-gray-300 dark:bg-slate-600 flex-grow mx-6"></div>
        <span className="px-4 text-yellow-500 font-medium text-xl text-center">
          Trusted by startups and Fortune 500 companies
        </span>
        <div className="h-px bg-gray-300 dark:bg-slate-600 flex-grow mx-6"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-semibold">
            Software Development & Engineering Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-slate-300">
            Driven by the top 1% of software engineering talent in India, we
            deliver robust, scalable, and reliable software product solutions
            to clients across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border-t-4 border-[#1D4ED8] bg-white dark:bg-slate-800 dark:border-blue-600"
            >
              <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
              <p className="text-gray-700 dark:text-slate-300 text-base">
                {service.description}
              </p>
              <Link href={service.path}>
                <p className="mt-3 text-blue-500 hover:underline">
                  Explore more
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesWeProvide;
