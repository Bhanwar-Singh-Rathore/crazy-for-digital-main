// app/service/web-development/[slug]/page.tsx
import { notFound } from 'next/navigation'
import WebDevelopment from '@/components/Pages/WebDevelopment'
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
  processSteps_ecom_dev
} from '@/app/utils/data'

interface Props {
  params: { slug: string }
}


export default function WebDevDetailPage({ params }: Props) {
  const { slug } = params

  // 1) if you want to fall back to the overview:
  if (slug === undefined || slug === '') {
    return (
      <WebDevelopment
        hero={heroContent_web}
        features={listFeatures_web}
        about={aboutSections_web}
        steps={processSteps_web}
      />
    )
  }

  // 2) map known detail‑slugs to components
  switch (slug) {
    case 'web-development':
    case 'marketplace-solutions':
      return (
        <WebDevelopment
          hero={heroContent_mkt_dev}
          features={listFeatures_mkt_dev}
          about={aboutSections_mkt_dev}
          steps={processSteps_mkt_dev}
        />
      )
    case 'ecommerce-development':
    case 'app-development':
    case 'ux-frontend-engineering':
    case 'system-infrastructure':
    case 'paid-media-management':
    case 'retargeting-funnel-strategy':
    case 'landing-pages-conversion-optimization':
    case 'analytics-performance-reporting':
    case 'crm-marketing-automation':
    case 'email-whatsapp-retention-flows':
    case 'marketplace-campaign-management':
    case 'influencer-community-activation':
    case 'seo-audit-technical-fixes':
    case 'on-page-seo-optimization':
    case 'content-seo-keyword-strategy':
    case 'internal-linking-blog-architecture':
    case 'local-seo-google-business-optimization':
    case 'schema-markup-structured-data':
    case 'seo-copywriting-content-optimization':
    case 'ai-assisted-seo-automation-support':
    case 'performance-tracking-seo-reporting':
    case 'copywriting-messaging':
    case 'brand-identity-naming':
    case 'content-strategy-planning':
    case 'creative-studio-visual-assets':
    case 'motion-animation':
    case 'video-editing-reels':
    case 'design-systems-templates':
    case 'social-media-management':
    case 'content-calendars-scheduling':
    case 'engagement-dm-routing':
    case 'community-management':
    case 'influencer-marketing':
    case 'platform-setup-optimization':
    case 'performance-reporting-insights':
    case 'ai-chatbots-assistants':
    case 'predictive-analytics':
    case 'custom-workflows-automation':
    case 'martech-stack-setup':
    case 'system-integrations-apis':
    case 'data-layer-tracking-infrastructure':
    case 'personalization-engines':
    case 'for-startups':
    case 'for-ecommerce':
    case 'for-creators-influencers':
    case 'for-b2b-saas':
    case 'for-founders-solo-teams':
      return (
        <WebDevelopment
          hero={heroContent_ecom_dev}
          features={listFeatures_ecom_dev}
          about={aboutSections_ecom_dev}
          steps={processSteps_ecom_dev}
        />
      )
    default:
      // 3) 404 for anything else
      notFound()
  }
}
