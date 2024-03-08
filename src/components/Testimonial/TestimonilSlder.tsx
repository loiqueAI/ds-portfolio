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

type Props = {};

const TestimonilSlder = (props: Props) => {
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
      {/* <ClientReview
        image="/images/b1.jpg"
        name="Loique Nangna"
        role="Web dev"
      />
      <ClientReview image="/images/b2.jpg" name="Fonteh L" role="UX Design" />
      <ClientReview
        image="/images/b1.jpg"
        name="Nathan Foe"
        role="ML engineer"
      />
      <ClientReview
        image="/images/b2.jpg"
        name="Fogouang"
        role="Data Scientist"
      /> */}
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Carousel>
  );
};

export default TestimonilSlder;
