import React from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/test4.png";
import testImage2 from "../assets/test2.png";
import testImage3 from "../assets/test3.png";



const blogs = [
  {
    title: "Vivah Sanyog: More Than Just a Match – It’s a Journey of Togetherness",
    content: {
      intro:
        "In the realm of matrimony, finding a life partner transcends mere compatibility; it's about embarking on a shared journey of love, trust, and mutual growth. At Vivah Sanyog, we believe that every union is a meaningful convergence of souls, destined to create a harmonious life together.",
      body: [
        {
          heading: "The Essence of 'Sanyog'",
          para:
            "'Sanyog' signifies a destined union, a coming together of two individuals meant to complement and support each other through life's myriad experiences."
        },
        {
          heading: "Beyond Algorithms",
          para:
            "While technology aids in matching profiles, we emphasize understanding individual aspirations, values, and cultural nuances to foster genuine connections."
        },
        {
          heading: "Real-Life Success Stories",
          para:
            "Our platform has been instrumental in uniting countless couples who found not just partners but lifelong companions. [Include anonymized testimonials or anecdotes.]"
        },
        {
          heading: "Continuous Support",
          para:
            "From profile creation to post-marriage guidance, Vivah Sanyog offers unwavering support to ensure a seamless journey towards marital bliss."
        }
      ],
      conclusion:
        "Choosing Vivah Sanyog means embracing a partner in your quest for love, understanding, and a fulfilling life together. Let us be the bridge to your destined union."
    }
  },
  {
    title: "5 Signs You’ve Found the Right Life Partner",
    content: {
      intro:
        "Identifying the right life partner involves recognizing signs that indicate deep compatibility and mutual respect. Here are five indicators that you've met someone truly special.",
      body: [
        {
          heading: "Emotional Safety",
          para:
            "You feel secure expressing your thoughts and emotions without fear of judgment."
        },
        {
          heading: "Open Communication",
          para:
            "Conversations flow effortlessly, encompassing both trivial and profound topics."
        },
        {
          heading: "Shared Values",
          para:
            "Fundamental beliefs and life goals align, providing a solid foundation for the future."
        },
        {
          heading: "Mutual Growth",
          para:
            "Both partners encourage and support each other's personal and professional development."
        },
        {
          heading: "Future Vision",
          para:
            "There's a shared enthusiasm for building a life together, encompassing dreams and aspirations."
        }
      ],
      conclusion:
        "Recognizing these signs can affirm that you're on the path to a harmonious and enduring partnership."
    }
  },
  {
    title: "Vivah in the Digital Age: Why Matrimony Portals Still Work",
    content: {
      intro:
        "In an era dominated by dating apps, traditional matrimony portals like Vivah Sanyog continue to hold significant relevance. Here's why they remain integral to modern matchmaking.",
      body: [
        {
          heading: "Serious Intentions",
          para:
            "Matrimony platforms attract individuals genuinely seeking long-term commitments."
        },
        {
          heading: "Cultural Compatibility",
          para:
            "These portals consider cultural, religious, and familial preferences, ensuring holistic compatibility."
        },
        {
          heading: "Verified Profiles",
          para:
            "Enhanced verification processes build trust and authenticity among users."
        },
        {
          heading: "Family Involvement",
          para:
            "Facilitates family participation, respecting traditional matchmaking practices."
        }
      ],
      conclusion:
        "Vivah Sanyog seamlessly blends traditional values with modern technology, providing a reliable avenue for finding a life partner."
    }
  },
  {
    title: "Tips for Writing a Matrimony Profile That Truly Reflects You",
    content: {
      intro:
        "Your matrimony profile is a reflection of your personality and aspirations. Crafting it thoughtfully can significantly impact your matchmaking journey.",
      body: [
        {
          heading: "Authentic Introduction",
          para:
            "Begin with a genuine portrayal of yourself, highlighting key aspects of your personality."
        },
        {
          heading: "Clear Preferences",
          para:
            "Articulate your expectations and what you seek in a partner with clarity."
        },
        {
          heading: "Positive Tone",
          para:
            "Maintain an optimistic and respectful tone throughout your profile."
        },
        {
          heading: "Concise Content",
          para:
            "Be succinct, ensuring your profile is engaging and easy to read."
        },
        {
          heading: "Recent Photographs",
          para:
            "Include clear and recent images to provide a true representation of yourself."
        }
      ],
      conclusion:
        "A well-crafted profile serves as a compelling introduction, paving the way for meaningful connections."
    }
  },
  {
    title: "From Chat to Shaadi: How to Build a Relationship the Right Way",
    content: {
      intro:
        "Transitioning from initial conversations to a lifelong commitment involves deliberate steps and mutual understanding. Here's a guide to nurturing your relationship journey.",
      body: [
        {
          heading: "Establish Trust",
          para:
            "Build a foundation of trust through honest and consistent communication."
        },
        {
          heading: "Understand Each Other",
          para:
            "Engage in discussions about values, life goals, and expectations."
        },
        {
          heading: "Family Engagement",
          para:
            "Involve families early in the process to ensure collective harmony."
        },
        {
          heading: "Plan Meetings",
          para:
            "Arrange in-person meetings to deepen your connection and assess compatibility."
        },
        {
          heading: "Seek Guidance",
          para:
            "Don't hesitate to seek advice from mentors or counselors when needed."
        }
      ],
      conclusion:
        "Navigating the path from acquaintance to marriage requires patience, empathy, and proactive efforts. With Vivah Sanyog, you're supported every step of the way."
    }
  }
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
              <div className="h-56 md:h-64 overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl object-top group-hover:scale-105 transition duration-500"
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
