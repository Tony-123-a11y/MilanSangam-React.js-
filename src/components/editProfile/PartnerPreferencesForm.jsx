import React from "react";
import { casteOptions, heightOptions } from "../../constants/data";

const PartnerPreferencesForm = ({
  formData,
  handlePartnerPreferences,
  ageOptions,
  maritalStatusOptions,
  kidsOptions,
  religionOptions,
  motherTongueOptions,
  communityOptions,
  disabilityOptions,
  stateOptions,
  incomeOptions,
  educationOptions,
  occupationOptions,
}) => {
  const preferenceFields = [
    { id: "marriageStatus", label: "Marriage Status", options: maritalStatusOptions },
    // { id: "workingStatus", label: "Working Status", options: maritalStatusOptions },
    { id: "kids", label: "Kids", options: kidsOptions },
    { id: "motherTongue", label: "Mother Tongue", options: motherTongueOptions },
    { id: "community", label: "Community", options: communityOptions },
    { id: "physicalDisability", label: "Physical Disability", options: disabilityOptions },
    { id: "annualIncome", label: "Annual Income", options: incomeOptions },
    { id: "education", label: "Educational Qualifications", options: educationOptions },
    { id: "occupation", label: "Occupation", options: occupationOptions },
  ];

  return (
    <div className="grid p-1 grid-cols-2 gap-4 h-screen overflow-y-scroll custom-scrollbar">
 {/* age range */}
        <div className="w-full  border-2 border-amber-200 p-4 rounded-md">
          <h1 className="text-lg font-semibold">Age Range</h1>
          {/* age from */}
       <div className="flex gap-2">
         <div key={'ageFrom'} className="mt-4 flex-grow">
          <label className="block font-semibold" htmlFor={'ageFrom'}>Age From</label>
          <select
            className="w-full  bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'min'}
            id={'ageFrom'}
            value={formData?.partnerPreferences?.ageRange?.min || "Any"}
            onChange={(e)=>handlePartnerPreferences(e,'ageRange')}
          >
            <option value="Any">Any</option>
            {ageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {/* age to */}
        <div key={'ageTo'} className="mt-4 flex-grow">
          <label className="block" htmlFor={'ageFrom'}>Age To</label>
          <select
            className="w-full bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'max'}
            id={'ageFrom'}
            value={formData?.partnerPreferences?.ageRange?.max || "Any"}
           onChange={(e)=>handlePartnerPreferences(e,'ageRange')}
          >
            <option value="Any">Any</option>
            {ageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
       </div>
        </div>
        {/* height range */}
        <div className="w-full border-2 border-amber-300 p-4 rounded-md">
          <h1 className="text-lg font-semibold">Height Range</h1>
          {/* height from  */}
       <div className="flex gap-2">
         <div key={'heightFrom'} className="mt-4 flex-grow">
          <label className="block" htmlFor={'heightFrom'}>Height From</label>
          <select
            className="w-full bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'min'}
            id={'ageFrom'}
            value={formData?.partnerPreferences?.heightRange?.min || "Any"}
            onChange={(e)=>handlePartnerPreferences(e,'heightRange')}
          >
            <option value="Any">Any</option>
            {heightOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {/* height to */}
        <div key={'heightTo'} className="mt-4 flex-grow">
          <label className="block" htmlFor={'heightTo'}>Height To</label>
          <select
            className="w-full bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'max'}
            id={'heightTo'}
            value={formData?.partnerPreferences?.heightRange?.max || "Any"}
    onChange={(e)=>handlePartnerPreferences(e,'heightRange')}
          >
            <option value="Any">Any</option>
            {heightOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
       </div>
        </div>
        {/* location */}
      <div className="w-full  border-2 border-amber-200 p-4 rounded-md">
          <h1 className="text-lg font-semibold">Location</h1>
          {/* State */}
       <div className="flex gap-2">
         <div  className="mt-4 flex-grow">
          <label className="block font-semibold" htmlFor={'state'}>State</label>
          <select
            className="w-full  bg-gray-100 mt-2  border-gray-400 rounded-lg py-2 px-4"
            name={'state'}
            id={'state'}
            value={formData?.partnerPreferences?.location?.state || "Any"}
            onChange={(e)=>handlePartnerPreferences(e,'location')}
          >
            <option value="Any">Any</option>
            {stateOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>    
        {/* city */}
         <div  className="mt-4 flex-grow">
          <label className="block font-semibold" htmlFor={'city'}>City</label>
          <input
            className="w-full  border mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'city'}
            id={'city'}
            placeholder="Enter City"
            value={formData?.partnerPreferences?.location?.city}
            onChange={(e)=>handlePartnerPreferences(e,'location')}
          />
         
         
        </div>    
       </div>
        </div>
      {/* religion caste */}
<div className="w-full  border-2 border-amber-200 p-4 rounded-md">
          <h1 className="text-lg font-semibold">Religion And Caste</h1>
          {/* relgiion */}
       <div className="flex gap-2">
         <div key={'ageFrom'} className="mt-4 flex-grow">
          <label className="block font-semibold" htmlFor={'religion'}>Religion</label>
          <select
            className="w-full  bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'religion'}
            id={'religion'}
            value={formData?.partnerPreferences?.religionCaste?.religion || "Any"}
            onChange={(e)=>handlePartnerPreferences(e,'religionCaste')}
          >
            <option value="Any">Any</option>
            {religionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {/* caste*/}
        <div key={'ageTo'} className="mt-4 flex-grow">
          <label className="block" htmlFor={'caste'}>Caste</label>
          <select
            className="w-full bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={'caste'}
            id={'caste'}
            value={formData?.partnerPreferences?.religionCaste?.caste || "Any"}
           onChange={(e)=>handlePartnerPreferences(e,'religionCaste')}
          >
            <option value="Any">Any</option>
            {casteOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
       </div>
        </div>
      {preferenceFields.map(({ id, label, options }) => (
        <div key={id}>
          <label className="block" htmlFor={id}>{label}</label>
          <select
            className="w-full bg-gray-100 mt-2 border-gray-400 rounded-lg py-2 px-4"
            name={id}
            id={id}
            value={formData?.partnerPreferences?.[id] || "Any"}
            onChange={(e)=>handlePartnerPreferences(e)}
          >
            <option value="Any">Any</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default PartnerPreferencesForm;
