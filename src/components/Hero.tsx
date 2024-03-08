"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/loique-ds-cv.pdf";
    downloadLink.download = "loique-ds-cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="h-[88vh] ">
      <Particle />
      <div className="w-[80%] grid grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">Loique </span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            As a Data Scientist and AI Engineer, I am passionate about exploring
            and analyzing large amounts of data to extract valuable insights. My
            expertise in predictive modeling, machine learning, and neural
            networks enables me to develop innovative AI solutions to solve
            complex problems. My goal is to use my skills to transform data into
            actionable insights and contribute to the advancement of AI
            technology. 😊
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
            <button
              onClick={handleDownloadCV}
              className="px-[2rem] hover:bg-yellow-400  transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            className="object-cover rounded-full"
            src="/images/loic.jpg"
            alt="logo"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
