import image from "../assets/design.png";
import homeImage from "../assets/web.jpg";
import DetailPage from "../components/DetailPage";
import HiringModels from "../components/HiringPage";

import GuideTopics from "../components/GuideTopics";
import ServicesWeProvide from "../components/ServicesWeProvide";
import OurProcess from "../components/OurProcess";
import AdvancedTechnologies from "../components/AdvancedTechnologies";

const WebDevlopment = () => {
  const technologies = [
    {
      category: "Frontend & Backend",
      items: [
        "Web Devlopment",
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


  const technologiess = [
    {
      title: "Cross-Platform Development",
      description:
        "Build robust mobile apps that function seamlessly on both iOS and Android platforms.",
    },
    {
      title: "Native Development",
      description:
        "Custom-built apps optimized for each platform using Swift, Kotlin, or Java.",
    },
    {
      title: "User Experience (UX) Design",
      description:
        "Designs that prioritize intuitive navigation and user satisfaction.",
    },
    {
      title: "API Integration",
      description:
        "Secure and efficient API integrations to connect apps with back-end systems.",
    },
    {
      title: "Real-Time Features",
      description:
        "Incorporate real-time updates, chats, and notifications into your mobile apps.",
    },
    {
      title: "App Security",
      description:
        "Implement cutting-edge security measures to protect user data and ensure app safety.",
    },
  ];

  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "Understand your business needs and define the scope of the mobile app project.",
    },
    {
      title: "UI/UX Design",
      description:
        "Create interactive designs and prototypes to visualize the app's layout and features.",
    },
    {
      title: "Development",
      description:
        "Iterative development cycles focusing on delivering functional app modules.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing to ensure the app performs flawlessly across all devices.",
    },
    {
      title: "Deployment",
      description:
        "Launch the app on Google Play Store and Apple App Store with expert guidance.",
    },
    {
      title: "Maintenance & Updates",
      description:
        "Provide ongoing support to keep the app updated with the latest technologies.",
    },
  ];
  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">Web Development</h1>
            <p className="mb-4">
              Top 1% Web Devlopment App Developers. In-House Team Only. Overcome
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
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 ">
              Get Started Now
            </button>
          </div>

          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <img
              src={homeImage}
              alt="A Web Devlopment developer working on a project"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
            />
          </div>
        </main>
      </div>

      <ServicesWeProvide />

      <div className="bg-white text-black flex flex-wrap justify-center w-full mt-40 px-6">
        <div className="w-full lg:w-1/2 px-4">
          <p className="text-4xl font-semibold mb-4">
            Technical Expertise Of Our Web Devlopment Development Services
          </p>
          <p className="mb-16 text-l font-light">
            We are a top-notch Web Devlopment development company in India that
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
{/* 
      <DetailPage /> */}
      {/* <HiringModels /> */}
      <AdvancedTechnologies technologies={technologiess} />
      <OurProcess steps={steps} />

      <GuideTopics />
    </div>
  );
};

export default WebDevlopment;
