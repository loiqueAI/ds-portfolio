import React from "react";
import SkillsItem from "./SkillsItem";

type Props = {};

const Skills: React.FC<Props> = () => {
  const skillsData = [
    {
      title: "Python",
      imageUrl: "/images/python.png",
    },
    {
      title: "Jupyter Notebook",
      imageUrl: "/images/jupyter.png",
    },
    {
      title: "Typescript",
      imageUrl: "/images/ts.jpeg",
    },
    {
      title: "React js",
      imageUrl: "/images/react.png",
    },
    {
      title: "Tensorflow",
      imageUrl: "/images/tensorflow.png",
    },
    {
      title: "Sklearn",
      imageUrl: "/images/sklearn.png",
    },
    {
      title: "Pandas",
      imageUrl: "/images/pandas.png",
    },
    {
      title: "Numpy",
      imageUrl: "/images/numpy.png",
    },
    {
      title: "Matplotlib",
      imageUrl: "/images/matplotlib.png",
    },
    {
      title: "Seabon",
      imageUrl: "/images/seabon.png",
    },
    {
      title: "Angular",
      imageUrl: "/images/angular.png",
    },
    {
      title: "Flask",
      imageUrl: "/images/flask.png",
    },
    {
      title: "Javascript",
      imageUrl: "/images/js.png",
    },
    {
      title: "Nestjs",
      imageUrl: "/images/nest.png",
    },
    {
      title: "Nextjs",
      imageUrl: "/images/next.png",
    },
    {
      title: "MySql",
      imageUrl: "/images/sql.png",
    },
    {
      title: "MongoDb",
      imageUrl: "/images/mongo.png",
    },
    {
      title: "Postgree",
      imageUrl: "/images/postgree.png",
    },
  ];

  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
          {skillsData.map((skill, index) => (
            <SkillsItem
              key={index}
              title={skill.title}
              imageUrl={skill.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
