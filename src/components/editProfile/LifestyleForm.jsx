import React from "react";

const LifestyleForm = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Lifestyle</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="diet" className="block text-sm font-medium text-gray-700 mb-1">
            Diet
          </label>
          <select
            id="diet"
            name="diet"
            value={formData?.lifeType?.diet || ""}
            onChange={(e) => handleChange(e, "lifeType")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select Diet</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-vegetarian">Non-vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Eggetarian">Eggetarian</option>
            <option value="Jain">Jain</option>
          </select>
        </div>

        <div>
          <label htmlFor="smoking" className="block text-sm font-medium text-gray-700 mb-1">
            Smoking
          </label>
          <select
            id="smoking"
            name="smoking"
            value={formData?.lifeType?.smoking || ""}
            onChange={(e) => handleChange(e, "lifeType")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select Smoking Preference</option>
            <option value="Never">Never</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Regularly">Regularly</option>
            <option value="Trying to quit">Trying to quit</option>
          </select>
        </div>

        <div>
          <label htmlFor="drinking" className="block text-sm font-medium text-gray-700 mb-1">
            Drinking
          </label>
          <select
            id="drinking"
            name="drinking"
            value={formData?.lifeType?.drinking || ""}
            onChange={(e) => handleChange(e, "lifeType")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select Drinking Preference</option>
            <option value="Never">Never</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Regularly">Regularly</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LifestyleForm;
