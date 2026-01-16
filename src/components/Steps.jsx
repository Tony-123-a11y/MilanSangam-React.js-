import React from 'react'

const Steps = () => {
  return (
    
      <section className=" px-5 py-15 ">
       <div className="max-w-7xl mx-auto px-4">
  <h2 className="text-5xl text-amber-500 text-center font-bold font-['inter'] max-md:text-4xl max-sm:text-3xl">
    5 steps to find your better-half
  </h2>
  <p className="mt-3 text-lg text-gray-600 text-center max-md:text-base max-sm:text-sm">
    Let’s Make This Simple
  </p>
  <div className="flex flex-col gap-12 mt-10">
    {[
      {
        heading: "Create Your Profile",
        content:
          "Tell us about yourself or your family member—education, profession, values, background, and preferences. Your information is kept secure and only shared with relevant matches.",
      },
      {
        heading: "Set Your Preferences",
        content:
          "Choose what truly matters in a life partner—community, income group, lifestyle, education, family type, and more.",
      },
      {
        heading: "Get Personalized Matches",
        content:
          "Our system suggests matches that align closely with your preferences—so you don’t waste time scrolling through irrelevant profiles.",
      },
      {
        heading: "Connect & Communicate",
        content:
          "Shortlist profiles, express interest, and start meaningful conversations when both sides are ready.",
      },
      {
        heading: "Move Towards a New Beginning",
        content:
          "Once a connection feels right, you can take the next step in your journey with confidence.",
      },
    ].map((step, index) => (
      <div key={index} className="flex items-start gap-6">
        <div className="w-14 h-14 max-sm:w-12 max-sm:h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl  shrink-0">
          {index + 1}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{step.heading}</h3>
          <p className="text-lg leading-relaxed text-gray-700 max-sm:text-base">{step.content}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</section>


  )
}

export default Steps
