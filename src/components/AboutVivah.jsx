import React from 'react'
import aboutBanner from '../assets/aboutBanner.avif'
const AboutVivah = () => {
  return (
    <div>
      <section className="px-5 py-15 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl text-amber-500 text-center font-bold max-md:text-4xl max-sm:text-3xl font-['inter'] mb-10">
      About Milan Sangam
    </h2>

    <div className="flex gap-4">
       <div className='w-1/2 max-lg:w-full'>
         <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Milan Sangam is a modern, internet-based <b>matrimonial matchmaking and wedding services</b> platform designed for
          today’s generation who seek meaningful, compatible, and verified life partners. Rooted in tradition yet powered by
          technology, we specialize in <b>honest, transparent matchmaking services</b> that honor cultural values while making the
          partner search process easier, smarter, and more respectful.
        </p>
        <div className="bg-white rounded-xl  p-6 flex flex-col gap-4 max-lg:p-2">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-amber-500 text-2xl">🔹</span>
            Matchmaking Based on What Truly Matters
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Milan Sangam, we understand that every individual is unique. Our intelligent matchmaking system considers <b>caste,
            profession, income, affluence level, and educational background</b> to help users find the most compatible matches.
            Whether you're looking for a partner from your community or open to broader horizons, our platform provides
            tailored match suggestions to suit your lifestyle and values.
          </p>
        </div>
        <div className="bg-white rounded-xl  p-6 flex flex-col gap-4 max-lg:p-2">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-amber-500 text-2xl">🔹</span>
          Our mission
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
           Milan Sangam was launched with a clear mission: to<b> build a transparent, respectful, and culturally sensitive
        matrimonial community online</b>, where users feel empowered and supported in their search for a life partner.
        
        Whether you're beginning your search or already have clear criteria in mind, <b>Milan Sangam offers the tools, insights,
        and personal support to guide you every step of the way</b>. No forced algorithms, no pressure—just real people,
        meaningful connections, and lifelong possibilities.
          </p>
        </div>
       </div>
       <div className="w-1/2 max-lg:hidden"> 
          <img src={aboutBanner} alt="" className='object-cover h-full rounded-lg shadow' />
       </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutVivah
