import React from "react";
import { useNavigate } from "react-router-dom";
import blogImg1 from "../assets/blog/blog1.png";
import blogImg2 from "../assets/blog/blog2.png";
import blogImg3 from "../assets/blog/blog3.png";
import blogImg4 from "../assets/blog/blog4.png";
import blogImg5 from "../assets/blog/blog5.png";
import blogImg6 from "../assets/blog/blog6.png";



const blogs = [
  {
    image: blogImg1,
    title: "Vivah Sanyog: More Than a Match, A Meaningful Life Journey",
    content: {
      intro:
        "Marriage is not just about finding a partner; it’s about building a shared life rooted in trust, respect, and understanding.",
      body: [
        {
          heading: "A Deeper Meaning of Compatibility",
          para:
            "True compatibility goes beyond preferences and looks. It lies in emotional connection and shared values.",
        },
        {
          heading: "Human-Centered Matchmaking",
          para:
            "We focus on understanding individuals, not just matching profiles.",
        },
        {
          heading: "Stories That Inspire",
          para:
            "Thousands of couples have found lifelong companionship through our platform.",
        },
      ],
      conclusion:
        "Vivah Sanyog walks with you at every step toward a meaningful married life.",
    },
  },
  {
    image: blogImg2,
    title: "5 Clear Signs You’ve Found the Right Life Partner",
    content: {
      intro:
        "Finding the right partner often feels natural. Here are signs that confirm you’re on the right path.",
      body: [
        {
          heading: "Emotional Comfort",
          para:
            "You feel calm, safe, and understood around them.",
        },
        {
          heading: "Aligned Values",
          para:
            "Life goals, beliefs, and priorities naturally match.",
        },
        {
          heading: "Mutual Respect",
          para:
            "Decisions are made together, with care and understanding.",
        },
      ],
      conclusion:
        "When trust and comfort come together, a strong bond is formed.",
    },
  },
  {
    image: blogImg3,
    title: "Why Matrimony Platforms Still Matter Today",
    content: {
      intro:
        "Even in the age of dating apps, matrimony platforms continue to build meaningful, lasting relationships.",
      body: [
        {
          heading: "Clear Intentions",
          para:
            "People join with a serious mindset for marriage.",
        },
        {
          heading: "Cultural Understanding",
          para:
            "Family values and traditions play a key role.",
        },
        {
          heading: "Verified Profiles",
          para:
            "Trust and safety are always prioritized.",
        },
      ],
      conclusion:
        "Matrimony platforms bridge tradition and modern relationships.",
    },
  },
  {
    image: blogImg4,
    title: "How to Write a Matrimony Profile That Feels Real",
    content: {
      intro:
        "Your profile is your first impression. Keeping it real makes all the difference.",
      body: [
        {
          heading: "Be Honest",
          para:
            "Authenticity attracts the right people.",
        },
        {
          heading: "Share Your Lifestyle",
          para:
            "Mention what truly matters in daily life.",
        },
        {
          heading: "Use Recent Photos",
          para:
            "Clear images build trust and confidence.",
        },
      ],
      conclusion:
        "A genuine profile leads to genuine connections.",
    },
  },
  {
    image: blogImg5,
    title: "From First Chat to Marriage: Building Trust",
    content: {
      intro:
        "Strong marriages begin with meaningful conversations and patience.",
      body: [
        {
          heading: "Open Communication",
          para:
            "Talk openly about expectations and future plans.",
        },
        {
          heading: "Take Time",
          para:
            "Rushing often leads to misunderstandings.",
        },
        {
          heading: "Family Involvement",
          para:
            "Family support strengthens relationships.",
        },
      ],
      conclusion:
        "Trust grows slowly but lasts forever.",
    },
  },
  {
    image: blogImg6,
    title: "Arranged Marriage in Modern Times: A New Perspective",
    content: {
      intro:
        "Arranged marriages today are about choice, consent, and compatibility.",
      body: [
        {
          heading: "Choice Comes First",
          para:
            "Modern arranged marriages respect individual decisions.",
        },
        {
          heading: "Balanced Approach",
          para:
            "Tradition blends smoothly with modern thinking.",
        },
        {
          heading: "Stronger Foundations",
          para:
            "Families and individuals build trust together.",
        },
      ],
      conclusion:
        "Modern arranged marriages are partnerships built on understanding.",
    },
  },
];



const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate('/blog', { state: { blog } });
  };

  return (
    <section className="pt-12 px-4 md:px-6 lg:px-8 bg-white py-15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
            Latest From Our Blog
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Advice, stories, and insights from our team and happy couples.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-4">
          {blogs.map((blog,i) => (
            <div
              key={i}
              className="bg-gray-50   rounded-2xl  p-1 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <button
                  onClick={() => handleReadMore(blog)}
                  className="mt-3 relative  group text-red-800 hover:text-white  border-black py-1.5 px-4  transition cursor-pointer duration-100"
                  style={{ textDecorationColor: "#A62C2C" }}
                >
                 <span className="relative z-10 "> Read More</span>
                  <div className="absolute left-0 top-0 w-0 h-full group-hover:w-full transition-all bg-red-700 duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
