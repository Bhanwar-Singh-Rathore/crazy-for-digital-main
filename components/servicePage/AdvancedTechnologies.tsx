import PropTypes from "prop-types";

const AdvancedTechnologies = ({ technologies }) => {
  return (
    <div className="bg-gray-50 dark:bg-bg-color-dark py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-4">
          Advanced Technologies We Rely On
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
          Discover the core practices that drive our efficient and successful
          software development projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-t-4 border-[#1D4ED8]"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {tech.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define propTypes for better type checking
AdvancedTechnologies.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdvancedTechnologies;
