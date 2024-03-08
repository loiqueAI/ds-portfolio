import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className=" pt-[4rem] md-pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400"> Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              AI and Machine Learning Application Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Designing, developing, and deploying applications that leverage
              artificial intelligence and machine learning techniques to solve
              problems in various domains such as image recognition, natural
              language processing, prediction, etc.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              AI and Machine Learning Consulting
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Providing consulting services to help businesses understand how AI
              and machine learning can enhance their operations, identify
              relevant use cases, and implement tailored solutions.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Training and Workshops
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Organizing training sessions and workshops to help professionals
              acquire skills in AI, machine learning, data science, and data
              analysis. This may include online courses, in-person sessions, or
              educational resources
            </p>
          </div>
        </div>

        <div>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Data Analysis and Visualization
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Offering advanced data analysis services to help businesses
              extract valuable insights from their data. This may include data
              exploration, statistical modeling, data visualization, and
              creating interactive dashboards
            </p>
          </div>
        </div>
        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Predictive Model Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Designing and developing custom predictive models to help
              businesses anticipate trends, make informed decisions, and
              optimize their business processes
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Process Optimization and Automation
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Using AI and machine learning techniques to optimize and automate
              business processes, leading to efficiency gains, cost savings, and
              overall performance improvement.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Text Analytics Solutions
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Creating solutions that analyze and extract information from large
              amounts of unstructured text, such as news articles, social media,
              customer reviews, etc
            </p>
          </div>
        </div>
        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fraud Detection and Security
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Designing and developing custom predictive models to help
              businesses anticipate trends, make informed decisions, and
              optimize their business processes
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Intelligent Chatbot Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Building AI-powered chatbots that can interact with users in a
              natural and intelligent manner to answer their questions, solve
              their problems, and automate common tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
