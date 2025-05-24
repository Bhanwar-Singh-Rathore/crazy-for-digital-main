
import homeImage from "../assets/dev2.jpg";
import image from "../assets/dev1.jpg";

import OurProcess from "../components/OurProcess";
import AdvancedTechnologies from "../components/AdvancedTechnologies";
import ServicesWeProvide from "../components/ServicesWeProvide";
import TechnicalExpertise from "../components/TechnicalExpertise";

import GuideTopics from "../components/GuideTopics";
import CommonComp from "../components/CommonComp";
import ExploreMoreButton from "../components/ExploreMoreButton";

const DevOpsImplementation = () => {
  const technologies = [
    {
      title: "CI/CD Pipelines",
      description:
        "Automate your development lifecycle with robust CI/CD pipelines.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Manage infrastructure using tools like Terraform and Ansible.",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly integrate cloud services into your DevOps processes.",
    },
    {
      title: "Containerization",
      description:
        "Deploy applications using Docker and Kubernetes for scalability.",
    },
    {
      title: "Monitoring & Logging",
      description:
        "Track performance with tools like Prometheus, Grafana, and ELK stack.",
    },
    {
      title: "DevSecOps",
      description: "Incorporate security practices into your DevOps pipelines.",
    },
  ];

  const steps = [
    {
      title: "Assessment & Planning",
      description:
        "Analyze your current processes and create a custom DevOps roadmap.",
    },
    {
      title: "Toolchain Selection",
      description:
        "Choose the right tools to streamline your development process.",
    },
    {
      title: "Automation",
      description: "Automate repetitive tasks to reduce manual intervention.",
    },
    {
      title: "Integration",
      description:
        "Integrate tools and processes across development and operations.",
    },
    {
      title: "Testing & Monitoring",
      description:
        "Ensure seamless deployment and monitor application performance.",
    },
    {
      title: "Optimization",
      description: "Continuously optimize pipelines for improved efficiency.",
    },
  ];

  const technologiesStack = [
    {
      category: "CI/CD Tools",
      items: ["Jenkins", "GitLab CI", "CircleCI", "Travis CI"],
    },
    {
      category: "Infrastructure as Code (IaC)",
      items: ["Terraform", "Ansible", "Puppet", "Chef"],
    },
    {
      category: "Containerization & Orchestration",
      items: ["Docker", "Kubernetes", "ECS", "Helm"],
    },
    {
      category: "Monitoring & Logging",
      items: ["Prometheus", "Grafana", "ELK Stack", "Splunk"],
    },
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
    },
    {
      category: "Version Control",
      items: ["Git", "Bitbucket", "GitHub", "GitLab"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[90vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">
              DevOps Implementation Services
            </h1>
            <p className="mb-4">
              Accelerate your software delivery lifecycle with DevOps best
              practices. Optimize collaboration, enhance scalability, and ensure
              faster time-to-market.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="custom-checkmark ">Faster development cycles</li>
              <li className="custom-checkmark ">Reduced operational costs</li>
              <li className="custom-checkmark ">Improved collaboration</li>
              <li className="custom-checkmark ">
                Enhanced security and reliability
              </li>
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 ">
              Get Started Now
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-1/2 mt-12">
            <img
              src={homeImage}
              alt="DevOps process"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
            />
          </div>
        </main>
      </div>

      <ServicesWeProvide />
      <TechnicalExpertise
        technologiesStack={technologiesStack}
        title={"DevOps Implementation"}
        image={image}
      />
      <AdvancedTechnologies technologies={technologies} />
      <OurProcess steps={steps} />
      <ExploreMoreButton />
      <CommonComp />
      <GuideTopics />
    </div>
  );
};

export default DevOpsImplementation;
