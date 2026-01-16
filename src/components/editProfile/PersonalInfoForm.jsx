import React from "react";
import { stateOptions } from "../../constants/data";

const PersonalInfoForm = ({ personalInfo, handleChange,maritalStatusOptions }) => {
  return (
    <div className="space-y-6 ">
      <h2 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo?.fullName || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={personalInfo?.gender || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={personalInfo?.dob ? personalInfo.dob.slice(0, 10) : ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Height */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
            Height
          </label>
          <select
            id="height"
            name="height"
            value={personalInfo?.height || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select your height</option>
            {[
              `4'10" (147 cm)`, `4'11" (150 cm)`, `5'0" (152 cm)`, `5'1" (155 cm)`, `5'2" (157 cm)`,
              `5'3" (160 cm)`, `5'4" (163 cm)`, `5'5" (165 cm)`, `5'6" (168 cm)`, `5'7" (170 cm)`,
              `5'8" (173 cm)`, `5'9" (175 cm)`, `5'10" (178 cm)`, `5'11" (180 cm)`, `6'0" (183 cm)`,
              `6'1" (185 cm)`, `6'2" (188 cm)`, `6'3" (191 cm)`, `6'4" (193 cm)`, `6'5" (196 cm)`
            ].map((val) => (
              <option key={val} value={val.split(" ")[0]}>
                {val}
              </option>
            ))}
          </select>
        </div>

        {/* Religion */}
        <div>
          <label htmlFor="religion" className="block text-sm font-medium text-gray-700 mb-1">
            Religion
          </label>
          <select
            id="religion"
            name="religion"
            value={personalInfo?.religion || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select Religion</option>
            {[
              "Christian", "Hindu", "Muslim", "Buddhist", "Jewish", "Sikh",
              "Jain", "Spiritual", "No Religion", "Other"
            ].map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
        </div>
     {/* state */}
      <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            id="state"
            name="state"
            value={personalInfo?.state || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select State</option>
            {stateOptions.map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
        </div>
     {/* City */}
      <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter City"
            value={personalInfo?.city || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"/>
        </div>
        {/* Mother Tongue */}
        <div>
          <label htmlFor="motherTongue" className="block text-sm font-medium text-gray-700 mb-1">
            Mother Tongue
          </label>
          <input
            type="text"
            id="motherTongue"
            name="motherTongue"
            value={personalInfo?.motherTongue || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Marital Status */}
        <div>
          <label htmlFor="marriageStatus" className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status
          </label>
          <select
            id="marriageStatus"
            name="marriageStatus"
            value={personalInfo?.marriageStatus || ""}
            onChange={(e) => handleChange(e, "personalInfo")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            {
              maritalStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))
            }
          </select>
        </div>
      </div>

      
    </div>
  );
};

export default PersonalInfoForm;
