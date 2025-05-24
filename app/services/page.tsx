
import Breadcrumb from "@/components/Common/Breadcrumb";
import HeroSection from "@/components/servicePage/HeroSection";
import MarketingSection from "@/components/servicePage/MarketingSection";
import ServiceShowcase from "@/components/servicePage/ServiceShowcase";
import TechnologySection from "@/components/servicePage/TechnologySection";
import WhyChooseSection from "@/components/servicePage/WhyChooseSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Crazy For Digital",
  description:
    "Affordable SEO, performance marketing, websites, and creative services for startups and founders. Built for growth, not overhead.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Affordable SEO, performance marketing, websites, and creative services for startups and founders. Built for growth, not overhead."
      />

      <HeroSection />
      <MarketingSection />
      <ServiceShowcase />
      {/* <TechnologySection /> */}
      <WhyChooseSection />
    </>
  );
};

export default ServicesPage;
