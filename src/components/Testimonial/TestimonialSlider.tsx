"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TestimonialSilder = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Loique Nangna"
        role="Web dev"
      />
      <ClientReview image="/images/c2.jpg" name="Fonteh L" role="UX Design" />
      <ClientReview
        image="/images/c1.jpg"
        name="Nathan Foe"
        role="ML engineer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Fogouang"
        role="Data Scientist"
      />
    </Carousel>
  );
};

export default TestimonialSilder;
