
// import homeImage from "../assets/cloud2.png";
// import image from "../assets/cloud1.jpg";

// import OurProcess from "../components/OurProcess";
// import AdvancedTechnologies from "../components/AdvancedTechnologies";
// import ServicesWeProvide from "../components/ServicesWeProvide";
// import TechnicalExpertise from "../components/TechnicalExpertise";

// import GuideTopics from "../components/GuideTopics";
// import CommonComp from "../components/CommonComp";
// import ExploreMoreButton from "../components/ExploreMoreButton";

// const CloudComputingSolutions = () => {
//   const technologies = [
//     {
//       title: "Cloud Migration",
//       description:
//         "Seamlessly migrate your infrastructure to the cloud with zero downtime.",
//     },
//     {
//       title: "Hybrid Cloud Solutions",
//       description:
//         "Combine the benefits of private and public clouds for optimal performance.",
//     },
//     {
//       title: "Cloud Security",
//       description:
//         "Ensure top-notch security for your data and applications on the cloud.",
//     },
//     {
//       title: "Cost Optimization",
//       description:
//         "Optimize cloud expenses to reduce operational costs and improve ROI.",
//     },
//     {
//       title: "Scalability",
//       description: "Scale resources up or down based on your business needs.",
//     },
//     {
//       title: "Cloud-Native Development",
//       description:
//         "Build applications optimized for the cloud environment using modern tools.",
//     },
//   ];

//   const steps = [
//     {
//       title: "Assessment",
//       description:
//         "Analyze your existing infrastructure and determine cloud readiness.",
//     },
//     {
//       title: "Strategy & Planning",
//       description: "Develop a detailed roadmap for your cloud transformation.",
//     },
//     {
//       title: "Migration",
//       description: "Move your applications, data, and workloads to the cloud.",
//     },
//     {
//       title: "Optimization",
//       description:
//         "Refine your cloud environment for performance and cost efficiency.",
//     },
//     {
//       title: "Monitoring & Management",
//       description: "Track cloud performance and ensure seamless operations.",
//     },
//     {
//       title: "Continuous Improvement",
//       description:
//         "Implement updates and improvements to align with business goals.",
//     },
//   ];

//   const technologiesStack = [
//     {
//       category: "Cloud Platforms",
//       items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"],
//     },
//     {
//       category: "Containerization & Orchestration",
//       items: ["Kubernetes", "Docker", "ECS", "EKS"],
//     },
//     {
//       category: "Serverless Computing",
//       items: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
//     },
//     {
//       category: "Storage Solutions",
//       items: ["Amazon S3", "Azure Blob Storage", "Google Cloud Storage"],
//     },
//     {
//       category: "Monitoring Tools",
//       items: ["CloudWatch", "Azure Monitor", "Google Stackdriver"],
//     },
//     {
//       category: "Automation Tools",
//       items: ["Terraform", "CloudFormation", "Pulumi"],
//     },
//   ];

//   return (
//     <div className="text-white min-h-screen">
//       <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
//           <div className="max-w-lg mt-16 lg:mt-0">
//             <h1 className="text-4xl font-bold mb-6">
//               Cloud Computing Solutions
//             </h1>
//             <p className="mb-4">
//               Unlock the full potential of cloud technology with our tailored
//               solutions. Enhance scalability, improve efficiency, and reduce
//               costs with our expert cloud services.
//             </p>
//             <ul className="space-y-2 mb-6">
//               <li className="custom-checkmark ">Customized cloud strategies</li>
//               <li className="custom-checkmark ">
//                 Secure and compliant solutions
//               </li>
//               <li className="custom-checkmark ">24/7 cloud monitoring</li>
//               <li className="custom-checkmark ">Cost-effective operations</li>
//             </ul>
//             <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 ">
//               Get Started Now
//             </button>
//           </div>
//           <div className="relative flex-shrink-0 w-full lg:w-1/2">
//             <img
//               src={homeImage}
//               alt="Cloud computing concept"
//               className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
//             />
//           </div>
//         </main>
//       </div>

//       <ServicesWeProvide />
//       <TechnicalExpertise
//         technologiesStack={technologiesStack}
//         title={"Cloud Computing Solutions"}
//         image={image}
//       />
//       <AdvancedTechnologies technologies={technologies} />
//       <OurProcess steps={steps} />
//       <ExploreMoreButton />
//       <CommonComp />
//       <GuideTopics />
//     </div>
//   );
// };

// export default CloudComputingSolutions;

// app/cloud-computing/page.tsx or pages/cloud-computing.tsx

// import Image from "next/image";
// import homeImage from "../assets/cloud2.png";
// import image from "../assets/cloud1.jpg";

import OurProcess from "@/components/OurProcess";
import AdvancedTechnologies from "@/components/AdvancedTechnologies";
import ServicesWeProvide from "@/components/ServicesWeProvide";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import GuideTopics from "@/components/GuideTopics";
import CommonComp from "@/components/CommonComp";
import ExploreMoreButton from "@/components/ExploreMoreButton";

const CloudComputingSolutions = () => {
  const technologies = [
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with zero downtime.",
    },
    {
      title: "Hybrid Cloud Solutions",
      description:
        "Combine the benefits of private and public clouds for optimal performance.",
    },
    {
      title: "Cloud Security",
      description:
        "Ensure top-notch security for your data and applications on the cloud.",
    },
    {
      title: "Cost Optimization",
      description:
        "Optimize cloud expenses to reduce operational costs and improve ROI.",
    },
    {
      title: "Scalability",
      description: "Scale resources up or down based on your business needs.",
    },
    {
      title: "Cloud-Native Development",
      description:
        "Build applications optimized for the cloud environment using modern tools.",
    },
  ];

  const steps = [
    {
      title: "Assessment",
      description:
        "Analyze your existing infrastructure and determine cloud readiness.",
    },
    {
      title: "Strategy & Planning",
      description: "Develop a detailed roadmap for your cloud transformation.",
    },
    {
      title: "Migration",
      description: "Move your applications, data, and workloads to the cloud.",
    },
    {
      title: "Optimization",
      description:
        "Refine your cloud environment for performance and cost efficiency.",
    },
    {
      title: "Monitoring & Management",
      description: "Track cloud performance and ensure seamless operations.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Implement updates and improvements to align with business goals.",
    },
  ];

  const technologiesStack = [
    {
      category: "Cloud Platforms",
      items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"],
    },
    {
      category: "Containerization & Orchestration",
      items: ["Kubernetes", "Docker", "ECS", "EKS"],
    },
    {
      category: "Serverless Computing",
      items: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
    },
    {
      category: "Storage Solutions",
      items: ["Amazon S3", "Azure Blob Storage", "Google Cloud Storage"],
    },
    {
      category: "Monitoring Tools",
      items: ["CloudWatch", "Azure Monitor", "Google Stackdriver"],
    },
    {
      category: "Automation Tools",
      items: ["Terraform", "CloudFormation", "Pulumi"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6">
              Cloud Computing Solutions
            </h1>
            <p className="mb-4">
              Unlock the full potential of cloud technology with our tailored
              solutions. Enhance scalability, improve efficiency, and reduce
              costs with our expert cloud services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="custom-checkmark">Customized cloud strategies</li>
              <li className="custom-checkmark">Secure and compliant solutions</li>
              <li className="custom-checkmark">24/7 cloud monitoring</li>
              <li className="custom-checkmark">Cost-effective operations</li>
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6">
              Get Started Now
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            {/* <Image
              src={homeImage}
              alt="Cloud computing concept"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
              placeholder="blur"
            /> */}
          </div>
        </main>
      </div>

      <ServicesWeProvide />
      <TechnicalExpertise
        technologiesStack={technologiesStack}
        title="Cloud Computing Solutions"
        // image={image}
      />
      <AdvancedTechnologies technologies={technologies} />
      <OurProcess steps={steps} />
      <ExploreMoreButton />
      <CommonComp />
      <GuideTopics />
    </div>
  );
};

export default CloudComputingSolutions;
