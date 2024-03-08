"use client";
import About from "@/components/About/About";
import Certification from "@/components/Certification/Certification";
import Hero from "@/components/Hero";
import Project from "@/components/Project/Project";
import Service from "@/components/Service/Service";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Hero />
        <Service />
        <Project />
        <Skills />
        <About />
        <Testimonial />
        <Certification />
      </div>
    </div>
  );
};

export default HomePage;
