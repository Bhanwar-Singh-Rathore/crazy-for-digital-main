import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Crazy For Digital",
  description:
    "Learn about Crazy For Digital — a lean, performance-first digital agency helping startups and small businesses grow through SEO, paid media, and website development.",
  // Add Organization schema or additional metadata here
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Learn about Crazy For Digital — a lean, performance-first digital agency helping startups and small businesses grow through SEO, paid media, and website development."
      />

      <AboutSectionOne />
      <AboutSectionTwo />

      {/* CTA Section */}
      <section
        id="cta"
        className="bg-primary/10 py-16 md:py-20 lg:py-28 text-center"
      >
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
            Let’s Build Something That Grows
          </h2>
          <p className="mb-8 text-base font-medium text-body-color sm:text-lg">
            Share your challenges, and we’ll respond with a clear, no-obligation plan for growth.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/80"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-sm bg-black px-8 py-4 text-base font-semibold text-white hover:bg-black/90"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;