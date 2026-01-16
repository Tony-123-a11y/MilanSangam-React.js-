import React from "react";

const AboutMeForm = ({ formData, handleChange }) => {
  const description = formData?.about?.description || "";
  const interests = formData?.about?.interests || [];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">About Me</h2>
      <p className="text-sm text-gray-600">
        Tell potential matches about yourself, your interests, and what you're
        looking for in a relationship.
      </p>

      {/* About Me Textarea */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          About Me
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) =>
            handleChange(
              { target: { name: "description", value: e.target.value } },
              "about"
            )
          }
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          placeholder="Share details about your personality, hobbies, values, and what you're looking for in a partner..."
        ></textarea>
        <p className="mt-2 text-sm text-gray-500">
          Minimum 100 characters, maximum 1000 characters
        </p>
      </div>

      {/* Interests Input */}
      <div>
        <label
          htmlFor="interests"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Interests & Hobbies
        </label>
        <input
          type="text"
          id="interests"
          name="interests"
          value={interests.join(", ")}
          onChange={(e) => {
            const interestsArray = e.target.value
              .split(",")
              .map((i) => i.trim())
              .filter((i) => i);
            handleChange(
              { target: { name: "interests", value: interestsArray } },
              "about"
            );
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          placeholder="e.g., Cooking, Travelling, Reading"
        />
      </div>
    </div>
  );
};

export default AboutMeForm;
