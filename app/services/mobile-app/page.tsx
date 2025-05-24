import ServicesWeProvide from "@/components/servicePage/ServicesWeProvide";
import homeImage from "../assets/mobileHome.png";
import image from "../assets/mobilesecond.png";
import TechnicalExpertise from "@/components/servicePage/TechnicalExpertise";
import AdvancedTechnologies from "@/components/servicePage/AdvancedTechnologies";
import OurProcess from "@/components/servicePage/OurProcess";

// import OurProcess from "../components/OurProcess";
// import AdvancedTechnologies from "../components/AdvancedTechnologies";
// import ServicesWeProvide from "../components/ServicesWeProvide";
// import TechnicalExpertise from "../components/TechnicalExpertise";
// import GuideTopics from "../components/GuideTopics";
// import ExploreMoreButton from "../components/ExploreMoreButton";

const MobileAppDevelopment = () => {
  const technologies = [
    {
      title: "Cross-Platform Development",
      description: "Build robust mobile apps that function seamlessly on both iOS and Android platforms.",
    },
    {
      title: "Native Development",
      description: "Custom-built apps optimized for each platform using Swift, Kotlin, or Java.",
    },
    {
      title: "User Experience (UX) Design",
      description: "Designs that prioritize intuitive navigation and user satisfaction.",
    },
    {
      title: "API Integration",
      description: "Secure and efficient API integrations to connect apps with back-end systems.",
    },
    {
      title: "Real-Time Features",
      description: "Incorporate real-time updates, chats, and notifications into your mobile apps.",
    },
    {
      title: "App Security",
      description: "Implement cutting-edge security measures to protect user data and ensure app safety.",
    },
  ];

  const steps = [
    {
      title: "Requirement Analysis",
      description: "Understand your business needs and define the scope of the mobile app project.",
    },
    {
      title: "UI/UX Design",
      description: "Create interactive designs and prototypes to visualize the app's layout and features.",
    },
    {
      title: "Development",
      description: "Iterative development cycles focusing on delivering functional app modules.",
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure the app performs flawlessly across all devices.",
    },
    {
      title: "Deployment",
      description: "Launch the app on Google Play Store and Apple App Store with expert guidance.",
    },
    {
      title: "Maintenance & Updates",
      description: "Provide ongoing support to keep the app updated with the latest technologies.",
    },
  ];

  const technologiesStack = [
    {
      category: "Programming Languages",
      items: ["Swift", "Kotlin", "Java", "React Native", "Flutter", "Dart"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React Native", "Flutter", "Ionic", "Xamarin", "NativeScript"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "Firebase", "GraphQL", "REST APIs"],
    },
    {
      category: "Cloud Platforms",
      items: ["AWS Mobile Hub", "Google Firebase", "Azure Mobile Services"],
    },
    {
      category: "Testing Tools",
      items: ["Appium", "Selenium", "JUnit", "XCTest", "Espresso"],
    },
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#1E0A3C] min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <main className="relative max-w-screen-xl mx-auto px-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">Mobile App Development</h1>
            <p className="mb-4">
              Build feature-rich mobile applications tailored to your business needs. Top 1% of developers delivering scalable, secure, and user-friendly mobile apps.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Cross-platform compatibility",
                "Scalable and secure solutions",
                "Flexible contracts, transparent pricing",
                "Free consultation and quick project setup",
              ].map((point, idx) => (
                <li key={idx} className="custom-checkmark">{point}</li>
              ))}
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 z-10">
              Get Started Now
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            {/* <img
              src={homeImage}
              alt="A mobile developer working on an app"
              className="w-full rounded-lg lg:h-[70vh] mt-12"
            /> */}
          </div>
        </main>
      </div>

      {/* Service Sections */}
      <ServicesWeProvide />
      <TechnicalExpertise
        technologiesStack={technologiesStack}
        title="Mobile App Development"
        // image={image}
      />
      <AdvancedTechnologies technologies={technologies} />
      <OurProcess steps={steps} />
      {/* <ExploreMoreButton /> */}
      {/* <GuideTopics /> */}
    </div>
  );
};

export default MobileAppDevelopment;
