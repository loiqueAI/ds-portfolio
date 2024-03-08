import React from "react";

type Props = {
  title: string;
  imageUrl: string;
};

const SkillsItem: React.FC<Props> = ({ title, imageUrl }) => {
  return (
    <div className="w-[200px] h-[200px] hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem] mx-auto text-[#d3fae8] rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="py-4" />
      <h2>{title}</h2> {/* Display the title */}
    </div>
  );
};

export default SkillsItem;
