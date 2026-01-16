import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can create a profile on Milan Sangam?",
      answer:
        "Anyone above the legal age of marriage can create a profile for themselves. Parents or guardians can also create profiles on behalf of their children.",
    },
    {
      question: "Is there a fee to use Milan Sangam?",
      answer:
        "We offer both free and premium features. Basic registration and browsing are free. For enhanced visibility and more matches, you can explore our premium plans.",
    },
    {
      question: "How are matches suggested?",
      answer:
        "Matches are based on your set preferences—like community, education, profession, family background, and lifestyle choices.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. We follow strict privacy protocols. Your contact details and sensitive information are never shared without your consent.",
    },
    {
      question: "Can I delete or update my profile anytime?",
      answer:
        "Absolutely. You have full control over your profile. You can update, hide, or delete it whenever you wish.",
    },
  ];
  return (
    <>
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-start mb-12">
            <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" bg-white rounded-lg overflow-hidden py-3 shadow-sm px-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-2  text-gray-700 font-medium  transition"
                >
                  <span className="text-left text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <span className="text-xl cursor-pointer">
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden `}
                >
                  <div className="px-4  text-gray-700 font-thin text-[16px] md:font-normal">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
