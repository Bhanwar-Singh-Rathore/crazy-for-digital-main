
import image from "../assets/design.png";
import homeImage from "../assets/hire-banner03.webp";
import DetailPage from "../components/DetailPage";
import HiringModels from "../components/HiringPage";
import CompanyExpertise from "../components/CommonComp";
import GuideTopics from "../components/GuideTopics";


const ReactNativeDeveloper = () => {
  const services = [
    {
      title: "Hire Dedicated React Native Developers",
      description:
        "You can access exceptional skills and distinctive knowledge by enlisting our committed React Native developers at affordable prices. Our hiring plans are simple and adaptable, allowing you to choose your preferred team on an hourly, part-time, or full-time basis.",
    },
    {
      title: "React Native Consulting",
      description:
        "Leverage our React Native consulting solutions to obtain a comprehensive project plan and framework for developing a mobile application with a native appearance and user experience utilizing Agile methodology.",
    },
    {
      title: "Mobile App Backend & API Development",
      description:
        "We offer complete backend and API development solutions for React Native-based mobile applications. Our engineers possess expertise in Node.js, PHP, and Python to develop personalized backend and API services to cater to your mobile application's requirements.",
    },
  ];

  const technologies = [
    {
      category: "Frontend & Backend",
      items: [
        "React Native",
        "Flutter",
        "Xamarin",
        "NativeScript",
        "Kotlin Native",
        "Swift (for iOS)",
        "Java (for Android)",
        "Node.js",
        "Django",
        "Ruby on Rails",
        "Laravel",
        "Flask",
        "ASP.NET",
        "Express.js",
      ],
    },
    {
      category: "Languages, Navigation & Configuration",
      items: [
        "JavaScript",
        "TypeScript",
        "React Navigation",
        "Chef",
        "Terraform",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      category: "Utilities & Pub/Sub Messaging",
      items: ["Lodash", "Ramda", "Moment.js", "gRPC", "Rabbit MQ"],
    },
    {
      category: "Middleware & Bundle",
      items: ["Redux Thunk", "Redux Saga", "Redux Observable", "Webpack"],
    },
    {
      category: "Networking & Forums",
      items: ["Axios", "Contentful", "Apollo", "GraphQL", "Redux Forms"],
    },
    {
      category: "Testing & App State",
      items: ["Jest", "Enzyme", "Chai", "Mocha", "Redux"],
    },
    {
      category: "Database & Server",
      items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Nginx"],
    },
    {
      category: "App Framework & App Server",
      items: ["Rails", "Trailblazer", "Hanami", "RSpec", "Pumo"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">
              Hire React Native Developers
            </h1>
            <p className="mb-4">
              Top 1% React Native App Developers. In-House Team Only. Overcome
              project hurdles with high-quality, scalable apps tailored to your
              business needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="custom-checkmark ">
                Proof of Work based timesheets
              </li>
              <li className="custom-checkmark ">IP Rights & NDA protection</li>
              <li className="custom-checkmark ">
                {" "}
                Flexible contracts, transparent pricing
              </li>
              <li className="custom-checkmark ">
                Free Trial, Zero Overheads, Quick Setup
              </li>
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6">
              Get Started Now
            </button>
          </div>

          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <img
              src={homeImage}
              alt="A React Native developer working on a project"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto"
            />
          </div>
        </main>
      </div>

      <div className="bg-slate-50 text-black py-16">
        <div className="flex items-center justify-center my-8 mb-24">
          <div className="h-px bg-gray-300 flex-grow mx-6"></div>
          <span className="px-4 text-yellow-500 font-medium text-xl">
            Trusted by startups and Fortune 500 companies
          </span>
          <div className="h-px bg-gray-300 flex-grow mx-6"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-semibold">
              Software Development & Engineering Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Driven by the top 1% of software engineering talent in India, we
              deliver robust, scalable, and reliable software product solutions
              to clients across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md border-t-4 border-yellow-500 bg-white"
              >
                <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white text-black flex flex-wrap justify-center w-full mt-40 px-6">
        <div className="w-full lg:w-1/2 px-4">
          <p className="text-4xl font-semibold mb-4">
            Technical Expertise Of Our React Native Development Services
          </p>
          <p className="mb-16 text-l font-light">
            We are a top-notch React Native development company in India that
            works to build customized, result-oriented, and high-performing
            mobile applications by deploying the latest technologies,
            frameworks, and languages.
          </p>
          <img
            className="object-fill w-full rounded-lg"
            src={image}
            alt="Technical expertise"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <div className="grid grid-cols-1 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 bg-white">
                <h3 className="font-semibold text-xl mb-4 text-gray-800">
                  {tech.category}
                </h3>
                <ul className="flex flex-wrap text-gray-700 gap-4">
                  {tech.items?.map((item, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 py-2 rounded-md px-3 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-gray-300 flex-grow mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DetailPage />
      <HiringModels />
      <CompanyExpertise />
      <GuideTopics />
    </div>
  );
};

export default ReactNativeDeveloper;
