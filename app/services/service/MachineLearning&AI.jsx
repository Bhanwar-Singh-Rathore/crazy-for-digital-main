
import image from "../assets/ai-tech.jpg";
import homeImage from "../assets/ai.jpg";

import OurProcess from "../components/OurProcess";
import AdvancedTechnologies from "../components/AdvancedTechnologies";
import ServicesWeProvide from "../components/ServicesWeProvide";
import TechnicalExpertise from "../components/TechnicalExpertise";

import GuideTopics from "../components/GuideTopics";
import CommonComp from "../components/CommonComp";
import ExploreMoreButton from "../components/ExploreMoreButton";

const MachineLearningAI = () => {
  const technologies = [
    {
      title: "Big Data",
      description:
        "Robust software designed to collect, process, and analyze vast volumes of data rapidly.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Intelligent software deriving insights and automating actions based on data and algorithms.",
    },
    {
      title: "Data Science",
      description:
        "Sophisticated software engineered to uncover and enhance complex data patterns.",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Efficient software solutions for processing and analyzing data collected.",
    },
    {
      title: "Augmented Reality",
      description:
        "Cutting-edge software that superimposes virtual elements onto the real world.",
    },
    {
      title: "Virtual Reality",
      description:
        "Immersive software creates realistic 3D environments with lifelike visuals and sound.",
    },
  ];

  const steps = [
    {
      title: "Software Kick-off",
      description:
        "Dive into bi-weekly sprints and rollouts aligned with project timelines.",
    },
    {
      title: "Task Execution & Development",
      description:
        "Combined team tackles tasks, fulfilling user stories and sprint goals.",
    },
    {
      title: "Daily Stand-ups",
      description:
        "Daily check-ins led by the Scrum Master to discuss progress and tackle challenges.",
    },
    {
      title: "Feature Quality Check",
      description:
        "Quality Engineers rigorously test new features, ensuring seamless integration.",
    },
    {
      title: "Backlog Updates",
      description:
        "Our team keeps the sprint backlog updated, staying on track to meet objectives.",
    },
    {
      title: "Sprint Reflections",
      description:
        "Post-sprint reflections to refine strategies and enhance future sprints.",
    },
  ];

  const technologiesStack = [
    {
      category: "ML Frameworks & Libraries",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "OpenCV",
        "Hugging Face Transformers",
        "Fast.ai",
      ],
    },
    {
      category: "Programming Languages",
      items: ["Python", "R", "Julia", "MATLAB", "Scala", "Java", "C++"],
    },
    {
      category: "Data Processing & ETL Tools",
      items: [
        "Apache Spark",
        "Dask",
        "Pandas",
        "NumPy",
        "Airflow",
        "Kafka",
        "ETL Pipelines with Prefect",
      ],
    },
    {
      category: "Big Data & Storage Solutions",
      items: [
        "Hadoop",
        "Apache Hive",
        "Amazon S3",
        "Google BigQuery",
        "Azure Data Lake",
        "Elasticsearch",
        "ClickHouse",
      ],
    },
    {
      category: "Cloud Platforms for ML & AI",
      items: [
        "AWS SageMaker",
        "Google AI Platform",
        "Azure Machine Learning",
        "IBM Watson",
        "Databricks",
      ],
    },
    {
      category: "Visualization Tools",
      items: [
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Tableau",
        "Power BI",
        "D3.js",
      ],
    },
    {
      category: "Natural Language Processing (NLP)",
      items: [
        "SpaCy",
        "NLTK",
        "BERT",
        "GPT (OpenAI Models)",
        "Transformers by Hugging Face",
        "StanfordNLP",
      ],
    },
    {
      category: "Deep Learning Tools",
      items: ["TensorBoard", "ONNX", "DeepStream SDK", "MXNet", "Caffe"],
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <div className="relative bg-[#1E0A3C] text-white min-h-[80vh]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-5 max-w-screen-xl mx-auto gap-8">
          <div className="max-w-lg mt-16 lg:mt-0">
            <h1 className="text-4xl font-bold mb-6"> Machine Learning & AI</h1>
            <p className="mb-4">
              Top 1% Machine Learning & AI . In-House Team Only. Overcome
              project hurdles with high-quality, scalable apps tailored to your
              business needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="custom-checkmark ">
                Proof of Work based timesheets
              </li>
              <li className="custom-checkmark ">IP Rights & NDA protection</li>
              <li className="custom-checkmark ">
                {" "}
                Flexible contracts, transparent pricing
              </li>
              <li className="custom-checkmark ">
                Free Trial, Zero Overheads, Quick Setup
              </li>
            </ul>
            <button className="bg-[#F97316] text-black px-6 py-3 rounded-full hover:bg-yellow-600 focus:ring focus:ring-yellow-300 relative -mt-6 ">
              Get Started Now
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <img
              src={homeImage}
              alt="A React Native developer working on a project"
              className="w-full rounded-lg lg:h-[70vh] sm:h-auto mt-12"
            />
          </div>
        </main>
      </div>

      <ServicesWeProvide />
      <TechnicalExpertise
        technologiesStack={technologiesStack}
        title={"Machine Learning & AI"}
        image={image}
      />
      <AdvancedTechnologies technologies={technologies} />
      <OurProcess steps={steps} />
      <ExploreMoreButton />
      <CommonComp />
      <GuideTopics />
    </div>
  );
};

export default MachineLearningAI;
