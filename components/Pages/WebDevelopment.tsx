'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/Common/SectionTitle'
import OurProcess from '@/components/servicePage/OurProcess'
import Contact from '@/components/Contact'
import webimage from '../../public/images/website_banner.webp'
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
)

const WebDevelopment = ({ hero, features = [], steps = [] }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
         <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
          {/* Text Column */}
          <div>
            <h1 className="mb-6 font-bold text-gray-900 dark:text-white md:text-5xl">
             {hero.title}
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
           {hero.subtitle}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
             {hero.description2}
            </p>
          </div>
          
      
          {/* Image Column */}
           <div className="relative w-full overflow-hidden rounded-xl ">
            <img
            // src="/images/about/about-image.svg"
              src="https://makeagency.co.uk/wp-content/uploads/2024/06/Boxpark_28.03.2024-1024x1024.png"
              alt="Agency work showcase"
              className="h-auto w-full object-cover"
            />
            {/* Example overlay text (optional) */}
            <div className="absolute bottom-4 left-4 text-sm text-white">
              Shoreditch. Croydon. Wembley. Liverpool. More TBC.
            </div>
          </div>
         
        </div> 
      </section>

      {/* Features Section */}
      {/* <section className="pt-16">
        <div className="container mx-auto">
          <SectionTitle
            title="Websites That Perform, Not Just Look Good"
            paragraph="When we build your site, we prioritize performance where it counts"
            mb="44px"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <List key={i} text={feature} />
            ))}
          </div>
        </div>
      </section> */}
 <section className="py-16 md:py-20 lg:py-28">
             <div className="container">
               <div className="-mx-4 flex flex-wrap items-center">
                 <div className="w-full px-4 lg:w-1/2">
                   <div
                    className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                    data-wow-delay=".15s"
                  >
                    <Image
                      src="/images/about/about-image-2.svg"
                      alt="about image"
                      fill
                      className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                    />
                    <Image
                      src="/images/about/about-image-2-dark.svg"
                      alt="about image"
                      fill
                      className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="wow fadeInUp max-w-[470px] space-y-9" data-wow-delay=".2s">
                    {/* Mission Statement */}
                    <div>
                      <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        Custom Website Development for Startups, Small Businesses, and Growing Brands
                      </h2>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Your website isn’t just a digital address — it’s your brand’s first handshake, your top salesperson, and your strongest marketing tool.
                      </p>
                    </div>
      
                    {/* Expertise Highlight */}
                    <div>
                     
                      <p className="text-base -mt-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        We build clean, mobile-optimized, SEO-first websites designed to grow with you.
                      </p>
                    </div>
      
                    {/* Approach Overview */}
                    <div>
                    
                      <p className="text-base -mt-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Whether you’re launching your first startup, scaling your service business, or upgrading an old site, we’ll craft a web experience that loads fast, ranks better, and drives real results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Websites That Perform, Not Just Look Good"
                paragraph="When we build your site, we prioritize We build websites that aren’t just pretty — they perform where it counts"
                
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fast Load Speeds" />
                    <List text="SEO Architecture" />
                    <List text="Conversion-Ready UX" />
                            <List text=" Scalable CMS Options" />
                   
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Transparency" />
                    <List text="Speed" />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Process Section */}
      <OurProcess steps={steps} />

         <div>
          <div className="bg-[#1E0A3C] dark:bg-bg-color-dark h-80 w-full mb-12 mt-12 text-white dark:text-gray-300 text-center flex items-center justify-center">
            <div>
              <p className="text-2xl font-semibold mb-4">Launch a Website That Powers Your Growth</p>
              <p className="text-lg">
                Ready to turn your website into your business’s best asset?
              </p>
              <p className="text-lg mb-6">
                Let’s build something clean, strategic, and built to scale.
              </p>
              <Link href={'/contact'}>
                <button className="bg-[#F97316] hover:bg-yellow-500 dark:bg-[#F97316] dark:hover:bg-yellow-600 text-black dark:text-black py-2 px-6 rounded">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>


     

      {/* Contact Form */}
      <Contact />
    </>
  )
}

export default WebDevelopment



// import Image from "next/image";

// import ServicesWeProvide from "@/components/servicePage/ServicesWeProvide";

// import OurProcess from "@/components/servicePage/OurProcess";
// import Contact from "@/components/Contact";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import SectionTitle from "@/components/Common/SectionTitle";
// import Link from "next/link";


// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

// const caseStudies = [
//   {
//     title: "Lyca Mobile",
//     subtitle: "Mobile Virtual Network Upgrade",
//     image: "/images/lyca-mobile.jpg",
//     categories: ["See more"],
//   },
//   {
//     title: "Wagamama",
//     subtitle: "Digital Growth Strategy",
//     image: "/images/wagamama.jpg",
//     categories: ["Brand", "Innovation"],
//   },
//   {
//     title: "Nestlé Health Science",
//     subtitle: "Nutrition Services",
//     image: "/images/nestle-health.jpg",
//     categories: ["Brand", "Experience", "Innovation"],
//   },
//   // add more cards here…
// ];

// const sections = [
//   {
//     heading: "Discovery",
//     text: `We specialise in complex web projects with ambitious sales targets and
//            intricate customer journeys. By understanding your organisation,
//            goals, target audiences, and competitive landscape, we craft strategies
//            that exceed industry standards and achieve your objectives.`,
//   },
//   {
//     heading: "Design",
//     text: `Our human‑centric, purposeful design approach ensures your website is
//            not only visually appealing but also highly functional. Our UX designers
//            focus on user journeys, accessibility, and interface layouts, creating
//            high‑fidelity designs that look great on all devices and drive conversions.`,
//   },
//   {
//     heading: "Build",
//     text: `We develop websites that rank for the right keywords, ensuring visibility
//            aligned with your business objectives. Our comprehensive SEO strategy
//            includes optimizing site speed, page titles, meta descriptions, images,
//            URLs, and more, leveraging your existing SEO heritage for maximum impact.`,
//   },
//   {
//     heading: "Testing & Go‑Live",
//     text: `With enterprise‑level technical expertise, we deliver robust, secure, and
//            high‑performing websites. Our experience in complex headless and integrated
//            CMS & CRM implementations ensures your site is built to last and easy
//            to manage, allowing your teams to make updates effortlessly.`,
//   },
// ];

// const WebDevlopment = () => {

//   const steps = [
//     {
//       title: "Discovery call to align on goals",
//       // description:
//       //   "Understand your business needs and define the scope of the mobile app project.",
//     },
//     {
//       title: "Wireframe and UX planning",
//       // description:
//       //   "Create interactive designs and prototypes to visualize the app's layout and features.",
//     },
//     {
//       title: "Custom design and responsive development",
//       // description:
//       //   "Iterative development cycles focusing on delivering functional app modules.",
//     },
//     {
//       title: "SEO setup and speed optimization",
//       // description:
//       //   "Rigorous testing to ensure the app performs flawlessly across all devices.",
//     },
//     {
//       title: "Quality checks and pre-launch review",
//       // description:
//       //   "Launch the app on Google Play Store and Apple App Store with expert guidance.",
//     },
//     {
//       title: "Post-launch support to ensure success",
//       // description:
//       //   "Provide ongoing support to keep the app updated with the latest technologies.",
//     },
//   ];

// const List = ({ text }) => (
//     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
//       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//         {checkIcon}
//       </span>
//       {text}
//     </p>
//   );

//   return (
        

//     <>


//       <section
//         className="
//         bg-gray-50
//         py-20 transition-colors
//         duration-300 dark:bg-gray-900
//       "
//       >
        // <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        //   {/* Text Column */}
        //   <div>
        //     <h1 className="mb-6 font-bold text-gray-900 dark:text-white md:text-5xl">
        //       Website Development
        //     </h1>
        //     <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        //       Your Website. Your Growth Engine.
        //     </p>
        //     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        //       We help founders, startups, and small businesses build websites that look great, load fast, rank high, and drive real business — not just traffic.
        //     </p>
        //   </div>

//           {/* Image Column */}
          // <div className="relative w-full overflow-hidden rounded-xl ">
          //   <img
          //     src="https://makeagency.co.uk/wp-content/uploads/2024/06/Boxpark_28.03.2024-1024x1024.png"
          //     alt="Agency work showcase"
          //     className="h-auto w-full object-cover"
          //   />
          //   {/* Example overlay text (optional) */}
          //   <div className="absolute bottom-4 left-4 text-sm text-white">
          //     Shoreditch. Croydon. Wembley. Liverpool. More TBC.
          //   </div>
          // </div>
//         </div>
//       </section>
     
//       <section className="py-16 md:py-20 lg:py-28">
//             <div className="container">
//               <div className="-mx-4 flex flex-wrap items-center">
//                 <div className="w-full px-4 lg:w-1/2">
//                   <div
//                     className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//                     data-wow-delay=".15s"
//                   >
//                     <Image
//                       src="/images/about/about-image-2.svg"
//                       alt="about image"
//                       fill
//                       className="drop-shadow-three dark:hidden dark:drop-shadow-none"
//                     />
//                     <Image
//                       src="/images/about/about-image-2-dark.svg"
//                       alt="about image"
//                       fill
//                       className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full px-4 lg:w-1/2">
//                   <div className="wow fadeInUp max-w-[470px] space-y-9" data-wow-delay=".2s">
//                     {/* Mission Statement */}
//                     <div>
//                       <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                         Custom Website Development for Startups, Small Businesses, and Growing Brands
//                       </h2>
//                       <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                         Your website isn’t just a digital address — it’s your brand’s first handshake, your top salesperson, and your strongest marketing tool.
//                       </p>
//                     </div>
      
//                     {/* Expertise Highlight */}
//                     <div>
                     
//                       <p className="text-base -mt-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                         We build clean, mobile-optimized, SEO-first websites designed to grow with you.
//                       </p>
//                     </div>
      
//                     {/* Approach Overview */}
//                     <div>
                    
//                       <p className="text-base -mt-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                         Whether you’re launching your first startup, scaling your service business, or upgrading an old site, we’ll craft a web experience that loads fast, ranks better, and drives real results.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
    //     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
    //   <div className="container">
    //     <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
    //       <div className="-mx-4 flex flex-wrap items-center">
    //         <div className="w-full px-4 lg:w-1/2">
    //           <SectionTitle
    //             title="Websites That Perform, Not Just Look Good"
    //             paragraph="When we build your site, we prioritize We build websites that aren’t just pretty — they perform where it counts"
                
    //             mb="44px"
    //           />

    //           <div
    //             className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
    //             data-wow-delay=".15s"
    //           >
    //             <div className="mx-[-12px] flex flex-wrap">
    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Fast Load Speeds" />
    //                 <List text="SEO Architecture" />
    //                 <List text="Conversion-Ready UX" />
    //                         <List text=" Scalable CMS Options" />
                   
    //               </div>

    //               {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Transparency" />
    //                 <List text="Speed" />
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="w-full px-4 lg:w-1/2">
    //           <div
    //             className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
    //             data-wow-delay=".2s"
    //           >
    //             <Image
    //               src="/images/about/about-image.svg"
    //               alt="about-image"
    //               fill
    //               className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
    //             />
    //             <Image
    //               src="/images/about/about-image-dark.svg"
    //               alt="about-image"
    //               fill
    //               className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
//     <OurProcess steps={steps} />
        // <div>
        //   <div className="bg-[#1E0A3C] dark:bg-bg-color-dark h-80 w-full mb-12 mt-12 text-white dark:text-gray-300 text-center flex items-center justify-center">
        //     <div>
        //       <p className="text-2xl font-semibold mb-4">Launch a Website That Powers Your Growth</p>
        //       <p className="text-lg">
        //         Ready to turn your website into your business’s best asset?
        //       </p>
        //       <p className="text-lg mb-6">
        //         Let’s build something clean, strategic, and built to scale.
        //       </p>
        //       <Link href={'/contact'}>
        //         <button className="bg-[#F97316] hover:bg-yellow-500 dark:bg-[#F97316] dark:hover:bg-yellow-600 text-black dark:text-black py-2 px-6 rounded">
        //           Get Quote
        //         </button>
        //       </Link>
        //     </div>
        //   </div>
        // </div>
//        <Contact />
//     </>
//   );
// };