import React from "react";
import background from '../assets/intellectualBg.png'
const IntellectualMatch = () => {
  return (
    <div className="font-['Poppins'] text-gray-800">
      {/* Hero Image with Text Overlay */}
      <div className="relative w-full h-120">
        <img
          src={background}
          alt="Intellectual Match"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-['Inter'] font-bold">
            Intellectual Match
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-15 space-y-6 max-w-7xl">
        <p>
          In any marriage, <strong>intellectual match</strong> is critical and a must-have for a
          long-lasting marriage bond. An intellectual match in marriage is like being with a best
          friend who thinks, questions, learns, and explores the world in a way that resonates with
          your own inner world. It leads to a stable, deep, and stimulating relationship that goes
          far beyond romance.
        </p>

        <p>
          An intellectual match in marriage refers to a relationship where both partners are
          mentally and intellectually compatible. This means they are able to:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Engage in meaningful conversations</li>
          <li>Challenge and stimulate each other’s thinking</li>
          <li>Share similar levels of curiosity, reasoning, and understanding</li>
          <li>Respect each other’s opinions, even when they disagree</li>
        </ul>

        <h2 className="text-xl font-semibold font-['Inter'] text-amber-700">💡 Why It's Important:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Better communication:</strong> Conversations go beyond daily chores and include
            ideas, beliefs, and mutual interests.
          </li>
          <li>
            <strong>Deeper connection:</strong> Partners feel “understood” at a core level.
          </li>
          <li>
            <strong>Shared growth:</strong> They learn from each other and grow together.
          </li>
          <li>
            <strong>Conflict resolution:</strong> Disagreements are handled maturely and logically.
          </li>
        </ul>

        <p>
          <strong>Not necessarily a level playing field –</strong> Intellectual compatibility is not
          strictly about IQ or education — it’s about connection, curiosity, mutual respect, and
          mental stimulation.
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            Two people with different backgrounds can still be a great intellectual match if they
            respect and enjoy each other&apos;s thinking.
          </li>
          <li>
            A school teacher and a tech engineer, or a writer and a banker — if they love to
            exchange ideas, learn from each other, and think critically — they’re on a level
            intellectual playing field emotionally and mentally.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntellectualMatch;
