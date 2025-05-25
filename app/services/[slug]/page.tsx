// app/service/web-development/[slug]/page.tsx
import { notFound } from "next/navigation";
import WebDevelopment from "@/components/Pages/WebDevelopment";
// import WebSolutionsDetail from '@/components/Pages/WebDevelopment/WebSolutionsDetail'
// import MarketingSolutionDetail from '@/components/Pages/WebDevelopment/MarketingSolutionDetail'
import {
  heroContent_web,
  listFeatures_web,
  aboutSections_web,
  processSteps_web,
  heroContent_mkt_dev,
  listFeatures_mkt_dev,
  aboutSections_mkt_dev,
  processSteps_mkt_dev,
  heroContent_ecom_dev,
  listFeatures_ecom_dev,
  aboutSections_ecom_dev,
  processSteps_ecom_dev,
  aboutContent,
  aboutSection2Content,
  heroContent_systemInfrastructure,
  listFeatures_systemInfrastructure,
  aboutContent_systemInfrastructure,
  aboutSection2Content_systemInfrastructure,
  processSteps_systemInfrastructure,
  heroContent_ux_front_end_engineering,
  listFeatures_ux_front_end_engineering,
  aboutContent_ux_front_end_engineering,
  aboutSection2Content_ux_front_end_engineering,
  processSteps_ux_front_end_engineering,
  heroContent_mobile_app_development,
  listFeatures_mobile_app_development,
  aboutContent_mobile_app_development,
  aboutSection2Content_mobile_app_development,
  processSteps_mobile_app_development,
  aboutSection2Content_ecommerce_development,
  processSteps_ecommerce_development,
  listFeatures_ecommerce_development,
  heroContent_ecommerce_development,
  aboutContent_ecommerce_development,
  listFeatures_paid_media_management,
  aboutContent_paid_media_management,
  aboutSection2Content_paid_media_management,
  processSteps_paid_media_management,
  heroContent_paid_media_management,
  heroContent_retargeting,
  listFeatures_retargeting,
  aboutContent_retargeting,
  aboutSection2Content_retargeting,
  processSteps_retargeting,
} from "@/app/utils/data";

interface Props {
  params: { slug: string };
}

export default function WebDevDetailPage({ params }: Props) {
  const { slug } = params;

  // 1) if you want to fall back to the overview:
  if (slug === undefined || slug === "") {
    return (
      <WebDevelopment
        hero={heroContent_web}
        features={listFeatures_web}
        about={aboutSections_web}
        steps={processSteps_web}
      />
    );
  }

  // 2) map known detail‑slugs to components
  switch (slug) {
    case "web-development":
      <WebDevelopment
        hero={heroContent_web}
        features={listFeatures_web}
        aboutContent={aboutContent}
        aboutSection2Content={aboutSection2Content}
        steps={processSteps_web}
      />;
    case "marketplace-solutions":
      return (
        <WebDevelopment
          hero={heroContent_mkt_dev}
          features={listFeatures_mkt_dev}
          aboutContent={aboutContent}
          aboutSection2Content={aboutSection2Content}
          steps={processSteps_mkt_dev}
        />
      );
    case "ecommerce-development":
      return (
        <WebDevelopment
          hero={heroContent_ecommerce_development}
          features={listFeatures_ecommerce_development}
          aboutContent={aboutContent_ecommerce_development}
          aboutSection2Content={aboutSection2Content}
          steps={processSteps_ecommerce_development}
        />
      );
    case "app-development":
      return (
        <WebDevelopment
          hero={heroContent_mobile_app_development}
          features={listFeatures_mobile_app_development}
          aboutContent={aboutContent_mobile_app_development}
          aboutSection2Content={aboutSection2Content_mobile_app_development}
          steps={processSteps_mobile_app_development}
        />
      );
    case "ux-frontend-engineering":
      return (
        <WebDevelopment
          hero={heroContent_ux_front_end_engineering}
          features={listFeatures_ux_front_end_engineering}
          aboutContent={aboutContent_ux_front_end_engineering}
          aboutSection2Content={aboutSection2Content_ux_front_end_engineering}
          steps={processSteps_ux_front_end_engineering}
        />
      );
    case "system-infrastructure":
      return (
        <WebDevelopment
          hero={heroContent_systemInfrastructure}
          features={listFeatures_systemInfrastructure}
          aboutContent={aboutContent_systemInfrastructure}
          aboutSection2Content={aboutSection2Content_systemInfrastructure}
          steps={processSteps_systemInfrastructure}
        />
      );
    case "paid-media-management":
      return (
        <WebDevelopment
          hero={heroContent_paid_media_management}
          features={listFeatures_paid_media_management}
          aboutContent={aboutContent_paid_media_management}
          aboutSection2Content={aboutSection2Content_paid_media_management}
          steps={processSteps_paid_media_management}
        />
      );

    case "retargeting-funnel-strategy":
      return (
        <WebDevelopment
          hero={heroContent_retargeting}
          features={listFeatures_retargeting}
          aboutContent={aboutContent_retargeting}
          aboutSection2Content={aboutSection2Content_retargeting}
          steps={processSteps_retargeting}
        />
      );
    case "landing-pages-conversion-optimization":
    case "analytics-performance-reporting":
    case "crm-marketing-automation":
    case "email-whatsapp-retention-flows":
    case "marketplace-campaign-management":
    case "influencer-community-activation":
    case "seo-audit-technical-fixes":
    case "on-page-seo-optimization":
    case "content-seo-keyword-strategy":
    case "internal-linking-blog-architecture":
    case "local-seo-google-business-optimization":
    case "schema-markup-structured-data":
    case "seo-copywriting-content-optimization":
    case "ai-assisted-seo-automation-support":
    case "performance-tracking-seo-reporting":
    case "copywriting-messaging":
    case "brand-identity-naming":
    case "content-strategy-planning":
    case "creative-studio-visual-assets":
    case "motion-animation":
    case "video-editing-reels":
    case "design-systems-templates":
    case "social-media-management":
    case "content-calendars-scheduling":
    case "engagement-dm-routing":
    case "community-management":
    case "influencer-marketing":
    case "platform-setup-optimization":
    case "performance-reporting-insights":
    case "ai-chatbots-assistants":
    case "predictive-analytics":
    case "custom-workflows-automation":
    case "martech-stack-setup":
    case "system-integrations-apis":
    case "data-layer-tracking-infrastructure":
    case "personalization-engines":
    case "for-startups":
    case "for-ecommerce":
    case "for-creators-influencers":
    case "for-b2b-saas":
    case "for-founders-solo-teams":
      return (
        <WebDevelopment
          hero={heroContent_ecom_dev}
          features={listFeatures_ecom_dev}
          about={aboutSections_ecom_dev}
          steps={processSteps_ecom_dev}
        />
      );
    default:
      notFound();
  }
}
