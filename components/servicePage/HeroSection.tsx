import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        text-center
        py-24
        bg-gradient-to-br
        from-blue-50 to-indigo-100
        dark:from-gray-900 dark:to-gray-800
        transition-colors duration-500
      "
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-200/30 dark:bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-200/20 dark:bg-pink-600/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          We specialize in helping businesses grow online through tailored
          digital strategies, technology, SEO, and social media.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="
              inline-block
              px-8 py-3
              font-medium
              rounded-full
              bg-indigo-600 text-white
              hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              transition
            "
          >
            See Our Work
          </a>
          <Link
            href="/contact"
            className="
              inline-block
              px-8 py-3
              font-medium
              rounded-full
              border-2 border-indigo-600
              text-indigo-600 dark:text-indigo-300
              hover:bg-indigo-50 dark:hover:bg-indigo-700
              transition
            "
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
