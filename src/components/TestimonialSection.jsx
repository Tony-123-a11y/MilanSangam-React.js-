import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { useRef } from "react";


import testImage1 from "../assets/testimonial/testimonial1.png";
import testImage2 from "../assets/testimonial/testimonial2.png";
import testImage3 from "../assets/testimonial/testimonial3.png";
import testImage4 from "../assets/testimonial/testimonial4.png";
import testImage5 from "../assets/testimonial/testimonial5.png";
import testImage6 from "../assets/testimonial/testimonial6.png";

const testimonials = [
  {
    name: "Amit & Aisha",
    location: "Lucknow, Uttar Pradesh",
    image: testImage1,
    feedback:
      "We connected instantly through this platform. The profiles felt genuine and the process was smooth. Today, we’re happily married and grateful for this beautiful beginning.",
  },
  {
    name: "Praveen & Neha",
    location: "Patna, Bihar",
    image: testImage2,
    feedback:
      "What we loved most was the personal touch. From matching preferences to guidance, everything felt thoughtful. We found trust, comfort, and finally each other.",
  },
  {
    name: "Karan & Priya",
    location: "Bengaluru, Karnataka",
    image: testImage3,
    feedback:
      "We were both busy professionals and didn’t expect much. But this platform surprised us. The compatibility was real, and conversations felt natural from day one.",
  },
  {
    name: "Vikram & Aarti",
    location: "Indore, Madhya Pradesh",
    image: testImage4,
    feedback:
      "This wasn’t just matchmaking, it felt like someone actually cared. Our values matched perfectly, and today we’re building a future together with confidence.",
  },
  {
    name: "Sahil & Riya",
    location: "Jaipur, Rajasthan",
    image: testImage5,
    feedback:
      "We were hesitant initially, but the experience felt safe and respectful. One meaningful conversation turned into countless memories. Truly thankful for this journey.",
  },
  {
    name: "Tarun & Isha",
    location: "Coimbatore, Tamil Nadu",
    image: testImage6,
    feedback:
      "Unlike other platforms, this one felt honest and calm. No pressure, no rush—just genuine connections. We’re now engaged and couldn’t be happier.",
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
