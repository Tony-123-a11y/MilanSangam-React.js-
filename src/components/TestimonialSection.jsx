import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { useRef } from "react";

import testImgae from "../assets/test.png";
import testImgae2 from "../assets/test2.png";
import testImgae3 from "../assets/test3.png";
import testImgae4 from "../assets/test4.png";
import testImgae5 from "../assets/test5.png";
import testImgae6 from "../assets/test6.png";

const testimonials = [
  {
    name: "Amit & Aisha",
    location: "Maharajganj, India",
    image: testImgae,
    feedback:
      "Thanks to this platform, I found my soulmate! Everything felt easy and genuine. Highly recommended!",
  },
  {
    name: "praveen & Neha",
    location: "Maharajganj, India",
    image: testImgae2,
    feedback:
      "The Elite Concierge guided us with unmatched personal care. We never felt alone in the journey.",
  },
  {
    name: "Karan & Priya",
    location: "Bangalore, India",
    image: testImgae3,
    feedback:
      "After years of searching, this site helped us meet in just a few months. We’re forever grateful!",
  },
  {
    name: "Vikram & Aarti",
    location: "Mumbai, India",
    image: testImgae4,
    feedback:
      "Absolutely the best matchmaking experience! We matched on our values and goals, not just looks.",
  },
  {
    name: "Sahil & Riya",
    location: "Hyderabad, India",
    image: testImgae5,
    feedback:
      "We both were hesitant at first, but one chat changed everything. Thank you for bringing us together!",
  },
  {
    name: "Tarun & Isha",
    location: "Chennai, India",
    image: testImgae6,
    feedback:
      "We tried other platforms too, but this one felt the most human and respectful. We're now engaged!",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots:true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 pt-12 px-4 md:px-8 py-15">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
        <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
            What Our Happy <br className="sm:hidden"/> Couples Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Real stories from real people
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-indigo-100 hover:bg-indigo-200 text-gradient p-3 rounded-full z-10 hidden md:block"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-indigo-100 hover:bg-indigo-200 text-gradient p-3 rounded-full z-10 hidden md:block"
        >
          <FaChevronRight />
        </button>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" p-1 px-2    group">
              <div className="shadow-sm rounded-2xl bg-white  h-full">
                <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg md:text-xl font-semibold text-red-800 font-['poppins'] capitalize">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="relative text-gray-600 text-sm md:text-base pl-6">
                    <FaQuoteLeft className="absolute top-1 left-0 text-indigo-400" />
                    <p className="leading-relaxed">{testimonial.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
