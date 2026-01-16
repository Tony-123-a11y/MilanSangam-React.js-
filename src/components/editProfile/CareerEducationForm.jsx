import React from "react";
import { incomeOptions } from "../../constants/data";

const CareerEducationForm = ({ formData, handleChange,educationOptions }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="education"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Highest Education
          </label>
          <select
            id="education"
            name="highestQualification"
            value={formData?.education?.highestQualification || ""}
            onChange={(e) => handleChange(e, "education")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Education
            </option>
       {
        educationOptions?.map((option,i)=>{
          return <option key={i} value={option}>{option}</option>
        } )
       }
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="educationDetails"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Education Details
          </label>
          <input
            type="text"
            id="educationDetails"
            name="educationDetails"
            value={formData?.education?.educationDetails || ""}
            onChange={(e) => handleChange(e, "education")}
            placeholder="University name, field of study, etc."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 pt-4">Career</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData?.career?.occupation || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData?.career?.company || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="employmentType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData?.career?.employmentType || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Employment Type
            </option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Business">Business</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="income"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Annual Income
          </label>
          <select
            id="income"
            name="annualIncome"
            value={formData?.career?.annualIncome || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
          {
            incomeOptions?.map((option,i)=>{
              return <option>{option}</option>
            })
          }
          </select>
        </div>
      </div>
    </div>
  );
};

export default CareerEducationForm;
