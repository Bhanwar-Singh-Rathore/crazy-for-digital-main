// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'

// const MarketingSection = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Web & App Development',
//       values: [
//         { value: 'Website Solutions', path: '/services/web-development' },
//         { value: 'Marketplace Development', path: '/services/marketplace-solutions' },
//         { value: 'E-Commerce Development', path: '/services/ecommerce-development' },
//         { value: 'App Development', path: '/services/app-development' },
//         { value: 'UX & Front-End Engineering', path: '/services/ux-frontend-engineering' },
//         { value: 'System & Infrastructure', path: '/services/system-infrastructure' },
//       ],
//     },
//    {
//   id: 2,
//   title: 'Performance & Growth Marketing',
//   values: [
//     { value: 'Paid Media Management', path: '/services/paid-media-management' },
//     { value: 'Retargeting & Funnel Strategy', path: '/services/retargeting-funnel-strategy' },
//     { value: 'Landing Pages & Conversion Optimization', path: '/services/landing-pages-conversion-optimization' },
//     { value: 'Analytics & Performance Reporting', path: '/services/analytics-performance-reporting' },
//     { value: 'CRM & Marketing Automation', path: '/services/crm-marketing-automation' },
//     { value: 'Email, WhatsApp & Retention Flows', path: '/services/email-whatsapp-retention-flows' },
//     { value: 'Marketplace Campaign Management', path: '/services/marketplace-campaign-management' },
//     { value: 'Influencer & Community Activation', path: '/services/influencer-community-activation' },
//   ],
// },
// {
//   id: 3,
//   title: 'SEO & Organic Visibility',
//   values: [
//     { value: 'SEO Audit & Technical Fixes', path: '/services/seo-audit-technical-fixes' },
//     { value: 'On-Page SEO Optimization', path: '/services/on-page-seo-optimization' },
//     { value: 'Content SEO & Keyword Strategy', path: '/services/content-seo-keyword-strategy' },
//     { value: 'Internal Linking & Blog Architecture', path: '/services/internal-linking-blog-architecture' },
//     { value: 'Local SEO & Google Business Optimization', path: '/services/local-seo-google-business-optimization' },
//     { value: 'Schema Markup & Structured Data', path: '/services/schema-markup-structured-data' },
//     { value: 'SEO Copywriting & Content Optimization', path: '/services/seo-copywriting-content-optimization' },
//     { value: 'AI-Assisted SEO & Automation Support', path: '/services/ai-assisted-seo-automation-support' },
//     { value: 'Performance Tracking & SEO Reporting', path: '/services/performance-tracking-seo-reporting' },
//   ],
// },
// {
//   id: 4,
//   title: 'Content, Creative & Branding',
//   values: [
//     { value: 'Copywriting & Messaging', path: '/services/copywriting-messaging' },
//     { value: 'Brand Identity & Naming', path: '/services/brand-identity-naming' },
//     { value: 'Content Strategy & Planning', path: '/services/content-strategy-planning' },
//     { value: 'Creative Studio & Visual Assets', path: '/services/creative-studio-visual-assets' },
//     { value: 'Motion & Animation', path: '/services/motion-animation' },
//     { value: 'Video Editing & Reels', path: '/services/video-editing-reels' },
//     { value: 'Design Systems & Templates', path: '/services/design-systems-templates' },
//   ],
// },
// {
//   id: 5,
//   title: 'Social & Community',
//   values: [
//     { value: 'Social Media Management', path: '/services/social-media-management' },
//     { value: 'Content Calendars & Scheduling', path: '/services/content-calendars-scheduling' },
//     { value: 'Engagement & DM Routing', path: '/services/engagement-dm-routing' },
//     { value: 'Community Management', path: '/services/community-management' },
//     { value: 'Influencer Marketing', path: '/services/influencer-marketing' },
//     { value: 'Platform Setup & Optimization', path: '/services/platform-setup-optimization' },
//     { value: 'Performance Reporting & Insights', path: '/services/performance-reporting-insights' },
//   ],
// },
// {
//   id: 6,
//   title: 'AI, Tech & Automation',
//   values: [
//     { value: 'AI Chatbots & Assistants', path: '/services/ai-chatbots-assistants' },
//     { value: 'Predictive Analytics', path: '/services/predictive-analytics' },
//     { value: 'Custom Workflows & Automation', path: '/services/custom-workflows-automation' },
//     { value: 'Martech Stack Setup', path: '/services/martech-stack-setup' },
//     { value: 'System Integrations & APIs', path: '/services/system-integrations-apis' },
//     { value: 'Data Layer & Tracking Infrastructure', path: '/services/data-layer-tracking-infrastructure' },
//     { value: 'Personalization Engines', path: '/services/personalization-engines' },
//   ],
// },
// {
//   id: 7,
//   title: 'Solutions by Client Type',
//   values: [
//     { value: 'For Startups', path: '/services/for-startups' },
//     { value: 'For Ecommerce', path: '/services/for-ecommerce' },
//     { value: 'For Creators / Influencers', path: '/services/for-creators-influencers' },
//     { value: 'For B2B / SaaS', path: '/services/for-b2b-saas' },
//     { value: 'For Founders / Solo Teams', path: '/services/for-founders-solo-teams' },
//   ],
// }

//   ]

//   const [openId, setOpenId] = useState<number | null>(null)

//   const toggleCollapse = (id: number) => {
//     setOpenId(prev => (prev === id ? null : id))
//   }

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Growth Marketing</h2>
//             <p className="text-gray-600">
//               Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.
//             </p>
//           </div>

//           <div className="md:col-span-2">
//             {services.map(service => {
//               const isOpen = service.id === openId
//               return (
//                 <div key={service.id} className="mb-4 border-t border-gray-200 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => toggleCollapse(service.id)}
//                     className="flex items-center w-full"
//                   >
//                     <div
//                       className={`w-5 mr-3 transform transition-transform duration-200 ${
//                         isOpen ? 'rotate-90' : ''
//                       }`}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="font-semibold text-lg flex-1 text-left">
//                       {service.title}
//                     </h3>
//                   </button>

//                   {isOpen && (
//                     <ul className="pl-8 mt-2 list-disc list-inside text-gray-600">
//                       {service.values.map((val, idx) => (
//                         <li key={idx}>
//                           <Link href={val.path} className="hover:underline">
//                             {val.value}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default MarketingSection












// // import React from 'react';

// // const MarketingSection= () => {
// //   const services = [
// //     {
// //       id: 1,
// //       title: 'Social Media',
// //       description: 'Strategic social media management to boost your brand presence and engagement.'
// //     },
// //     {
// //       id: 2,
// //       title: 'Creative Studio',
// //       description: 'Creative content production that captures attention and drives engagement.'
// //     },
// //     {
// //       id: 3,
// //       title: 'Paid Social',
// //       description: 'Targeted paid social campaigns to reach your ideal customers and drive conversions.'
// //     },
// //     {
// //       id: 4,
// //       title: 'Paid Search',
// //       description: 'Data-driven paid search campaigns to maximize your ROI.'
// //     }
// //   ];

// //   return (
// //     <section className="py-20 relative">
    

// //       <div className="container mx-auto px-6 ">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
// //           <div>
// //             <h2 className="text-3xl font-bold mb-6">Growth Marketing</h2>
// //             <p className="text-gray-600">
// //               Our digital marketing team is highly skilled in data-driven strategies for creative campaigns across PPC, social media, and influencer marketing. They constantly explore new trends and deliver high-quality results to drive business growth for clients.
// //             </p>
// //           </div>

// //           <div className="md:col-span-2">
// //             {services.map((service) => (
// //               <div key={service.id} className="mb-4 border-t border-gray-200 pt-4">
// //                 <div className="flex items-center">
// //                   <div className="w-5 mr-3">
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                   </div>
// //                   <h3 className="font-semibold text-lg">{service.title}</h3>
// //                 </div>
// //                 <div className="pl-8 mt-2">
// //                   <p className="text-gray-600">{service.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MarketingSection;

'use client'
import Link from 'next/link'

type Service = {
  id: number
  title: string
  desc:string
  values: { value: string; path: string }[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web & App Development',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
        values: [
      { value: 'Website Solutions', path: '/services/web-development' },
      { value: 'Marketplace Development', path: '/services/marketplace-solutions' },
      { value: 'E-Commerce Development', path: '/services/ecommerce-development' },
      { value: 'App Development', path: '/services/app-development' },
      { value: 'UX & Front-End Engineering', path: '/services/ux-frontend-engineering' },
      { value: 'System & Infrastructure', path: '/services/system-infrastructure' },
    ],
  },
  {
    id: 2,
    title: 'Performance & Growth Marketing',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'Paid Media Management', path: '/services/paid-media-management' },
      { value: 'Retargeting & Funnel Strategy', path: '/services/retargeting-funnel-strategy' },
      { value: 'Landing Pages & Conversion Optimization', path: '/services/landing-pages-conversion-optimization' },
      { value: 'Analytics & Performance Reporting', path: '/services/analytics-performance-reporting' },
      { value: 'CRM & Marketing Automation', path: '/services/crm-marketing-automation' },
      { value: 'Email, WhatsApp & Retention Flows', path: '/services/email-whatsapp-retention-flows' },
      { value: 'Marketplace Campaign Management', path: '/services/marketplace-campaign-management' },
      { value: 'Influencer & Community Activation', path: '/services/influencer-community-activation' },
    ],
  },
  {
    id: 3,
    title: 'SEO & Organic Visibility',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'SEO Audit & Technical Fixes', path: '/services/seo-audit-technical-fixes' },
      { value: 'On-Page SEO Optimization', path: '/services/on-page-seo-optimization' },
      { value: 'Content SEO & Keyword Strategy', path: '/services/content-seo-keyword-strategy' },
      { value: 'Internal Linking & Blog Architecture', path: '/services/internal-linking-blog-architecture' },
      { value: 'Local SEO & Google Business Optimization', path: '/services/local-seo-google-business-optimization' },
      { value: 'Schema Markup & Structured Data', path: '/services/schema-markup-structured-data' },
      { value: 'SEO Copywriting & Content Optimization', path: '/services/seo-copywriting-content-optimization' },
      { value: 'AI-Assisted SEO & Automation Support', path: '/services/ai-assisted-seo-automation-support' },
      { value: 'Performance Tracking & SEO Reporting', path: '/services/performance-tracking-seo-reporting' },
    ],
  },
  {
    id: 4,
    title: 'Content, Creative & Branding',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'Copywriting & Messaging', path: '/services/copywriting-messaging' },
      { value: 'Brand Identity & Naming', path: '/services/brand-identity-naming' },
      { value: 'Content Strategy & Planning', path: '/services/content-strategy-planning' },
      { value: 'Creative Studio & Visual Assets', path: '/services/creative-studio-visual-assets' },
      { value: 'Motion & Animation', path: '/services/motion-animation' },
      { value: 'Video Editing & Reels', path: '/services/video-editing-reels' },
      { value: 'Design Systems & Templates', path: '/services/design-systems-templates' },
    ],
  },
  {
    id: 5,
    title: 'Social & Community',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'Social Media Management', path: '/services/social-media-management' },
      { value: 'Content Calendars & Scheduling', path: '/services/content-calendars-scheduling' },
      { value: 'Engagement & DM Routing', path: '/services/engagement-dm-routing' },
      { value: 'Community Management', path: '/services/community-management' },
      { value: 'Influencer Marketing', path: '/services/influencer-marketing' },
      { value: 'Platform Setup & Optimization', path: '/services/platform-setup-optimization' },
      { value: 'Performance Reporting & Insights', path: '/services/performance-reporting-insights' },
    ],
  },
  {
    id: 6,
    title: 'AI, Tech & Automation',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'AI Chatbots & Assistants', path: '/services/ai-chatbots-assistants' },
      { value: 'Predictive Analytics', path: '/services/predictive-analytics' },
      { value: 'Custom Workflows & Automation', path: '/services/custom-workflows-automation' },
      { value: 'Martech Stack Setup', path: '/services/martech-stack-setup' },
      { value: 'System Integrations & APIs', path: '/services/system-integrations-apis' },
      { value: 'Data Layer & Tracking Infrastructure', path: '/services/data-layer-tracking-infrastructure' },
      { value: 'Personalization Engines', path: '/services/personalization-engines' },
    ],
  },
  {
    id: 7,
    title: 'Solutions by Client Type',
    desc:'Our digital marketing team is highly skilled in data-driven strategies across PPC, social media, and influencer marketing to drive real growth.',
    values: [
      { value: 'For Startups', path: '/services/for-startups' },
      { value: 'For Ecommerce', path: '/services/for-ecommerce' },
      { value: 'For Creators / Influencers', path: '/services/for-creators-influencers' },
      { value: 'For B2B / SaaS', path: '/services/for-b2b-saas' },
      { value: 'For Founders / Solo Teams', path: '/services/for-founders-solo-teams' },
    ],
  },
]

export default function MarketingSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                {service.title}
              </h2>
              <p className="mt-2 text-gray-600 text-base md:text-lg">
                {service.desc}
              </p>
            </div>

            <div className="lg:col-span-2">
              <ul className="pl-5 list-disc list-inside text-gray-600 space-y-2">
                {service.values.map((val, i) => (
                  <li key={i}>
                    <>
                      <Link href={val.path} className="hover:underline text-base sm:text-lg">
                        {val.value}
                      </Link>
                    </>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

