import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";
type Props = {
  name: string;
  role: string;
  image: string;
};

const ClientReview = (props: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={props.image}
        alt={props.name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{props.name} </h1>
      <p className="text-[18rem] text-while opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {props.role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit
        doloremque blanditiis cupiditate inventore! Est ducimus optio vero dicta
        vel earum nulla magni laborum fugiat praesentium doloremque, dolorem
        itaque eum!
      </p>
    </div>
  );
};

export default ClientReview;
