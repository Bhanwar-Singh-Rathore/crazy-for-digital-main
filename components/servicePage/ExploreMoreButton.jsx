import { Link } from "react-router-dom";

function ExploreMoreButton() {
  return (
    <div>
      <div className="bg-[#1E0A3C] dark:bg-bg-color-dark h-80 w-full mb-12 mt-12 text-white dark:text-gray-300 text-center flex items-center justify-center">
        <div>
          <p className="text-2xl font-semibold mb-4">Discover Digital Excellence</p>
          <p className="text-lg mb-6">
            Explore our digital solutions to help your business stay at the forefront of technology.
          </p>
          <Link to="BookFreeConsultation" smooth={true} duration={500}>
            <button className="bg-[#F97316] hover:bg-yellow-500 dark:bg-[#F97316] dark:hover:bg-yellow-600 text-black dark:text-black py-2 px-6 rounded">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreMoreButton;
