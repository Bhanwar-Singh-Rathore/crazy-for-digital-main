import React from 'react';

const reasons = [
  {
    title: "Data-Driven Approach",
    desc: "Every decision is backed by analytics and real results."
  },
  {
    title: "Full-Service Team",
    desc: "From creatives to coders, our team handles everything."
  },
  {
    title: "Results That Scale",
    desc: "We focus on long-term strategies with compounding ROI."
  }
];

const WhyChooseSection = () => {
  return (
    <section
      className="
        bg-gray-50 dark:bg-gray-900
        text-gray-900 dark:text-white
        py-20
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="
                p-6
                bg-white dark:bg-gray-800
                rounded-xl
                shadow-lg dark:shadow-none
                transition-colors duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {r.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
