
import homeImage from "../assets/ecom2.png";
import image from "../assets/ecom1.png";

import OurProcess from "../components/OurProcess";
import AdvancedTechnologies from "../components/AdvancedTechnologies";
import ServicesWeProvide from "../components/ServicesWeProvide";
import TechnicalExpertise from "../components/TechnicalExpertise";

import GuideTopics from "../components/GuideTopics";
import CommonComp from "../components/CommonComp";
import ExploreMoreButton from "../components/ExploreMoreButton";

const EcommerceDevelopment = () => {
  const technologies = [
    {
      title: "Custom E-commerce Platforms",
      description:
        "Build tailored e-commerce platforms to suit your unique business needs.",
    },
    {
      title: "Payment Gateway Integration",
      description: "Seamlessly integrate secure and popular payment gateways.",
    },
    {
      title: "Mobile Commerce",
      description:
        "Create mobile-optimized shopping experiences for customers on the go.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Track user behavior, sales, and performance metrics with in-depth analytics.",
    },
    {
      title: "Multi-vendor Platforms",
      description: "Support multiple vendors with robust management features.",
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "Optimize your platform for search engines and lightning-fast performance.",
    },
  ];

  const steps = [
    {
      title: "Business Analysis",
      description:
        "Understand your e-commerce business model and target audience.",
    },
    {
      title: "Design & Prototyping",
      description: "Create captivating UI/UX designs tailored to your brand.",
    },
    {
      title: "Development",
      description:
        "Develop scalable and secure e-commerce platforms using the latest technologies.",
    },
    {
      title: "Integration",
      description:
        "Integrate essential tools like payment gateways, shipping, and CRM systems.",
    },
    {
      title: "Testing & Launch",
      description: "Ensure your platform functions flawlessly before launch.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Provide ongoing support and updates to ensure smooth operations.",
    },
  ];

  const technologiesStack = [
    {
      category: "E-commerce Platforms",
      items: ["Shopify", "Magento", "WooCommerce", "BigCommerce"],
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "PHP", "Python", "Ruby"],
    },
    {
      category: "Frontend Technologies",
      items: ["React", "Vue.js", "Angular"],
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "Django", "Ruby on Rails", "Laravel"],
    },
    {
      category: "Payment Gateways",
      items: ["PayPal", "Stripe", "Razorpay", "Square"],
    },
    {
      category: "Analytics Tools",
      items: ["Google Analytics", "Mixpanel", "Hotjar"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">E-commerce Development</h1>
            <p className="mb-4">
              Empower your business with cutting-edge e-commerce solutions. From
              design to deployment, we deliver seamless, secure, and scalable
              platforms tailored to your needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="custom-checkmark ">Custom e-commerce designs</li>
              <li className="custom-checkmark ">Seamless integrations</li>
              <li className="custom-checkmark ">Mobile-first approach</li>
              <li className="custom-checkmark ">
                Ongoing support and maintenance
              </li>
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 ">
              Get Started Now
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <img
              src={homeImage}
              alt="E-commerce platform illustration"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
            />
          </div>
        </main>
      </div>

      <ServicesWeProvide />
      <TechnicalExpertise
        technologiesStack={technologiesStack}
        title={"E-commerce Development"}
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

export default EcommerceDevelopment;
