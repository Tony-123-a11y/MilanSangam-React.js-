import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import {
  ageOptions,
  maritalStatusOptions,
  kidsOptions,
  heightOptions,
  religionOptions,
  motherTongueOptions,
  communityOptions,
  disabilityOptions,
  stateOptions,
  metroCitiesOptions,
  countryOptions,
  incomeOptions,
  educationOptions,
  occupationOptions,
} from "../constants/searchOptions";

const SearchFilters = ({ onSearch, formRef }) => {

  const { control, handleSubmit } = useForm();
  const [universalOpen, setUniversalOpen] = useState(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setUniversalOpen(null);
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Dropdown = ({ field, label, options }) => {
    const isOpen = universalOpen === label;

    return (
      <div className="shadow relative rounded-xl bg-gray-50 cursor-pointer font-['poppins']">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setUniversalOpen(isOpen ? null : label);
          }}
          className="py-3 px-4 relative"
        >
          {!field.value ? (
            <span className="text-gray-700">{label}</span>
          ) : (
            field.value
          )}

          <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-4 pointer-events-none" />
        </div>

        {isOpen && (
          <ul
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              clsx(
                "absolute right-0 top-full max-h-40 custom-scrollbar overflow-y-scroll bg-amber-50 shadow-sm w-1/2 z-20 rounded-sm",
                (label === "Occupation" ||
                  label === "Educational Qualifications") &&
                  "-top-[270%]"
              )
            )}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-1 hover:bg-amber-100 cursor-pointer"
                onClick={() => {
                  field.onChange(option);
                  setUniversalOpen(null);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const onSubmit = (data) => {
    console.log("Search Filters:", data);
    onSearch && onSearch(data);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 grid p-1 h-screen hide-scrollbar overflow-y-scroll"
    >
      <Controller
        name="ageFrom"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Age From" options={ageOptions} />
        )}
      />

      <Controller
        name="ageTo"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Age To" options={ageOptions} />
        )}
      />

      <Controller
        name="maritalStatus"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown
            field={field}
            label="Marriage Status"
            options={maritalStatusOptions}
          />
        )}
      />

      <Controller
        name="kids"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Kids" options={kidsOptions} />
        )}
      />

      <Controller
        name="height"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Height" options={heightOptions} />
        )}
      />

      <Controller
        name="religion"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Religion" options={religionOptions} />
        )}
      />

      <Controller
        name="motherTongue"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown
            field={field}
            label="Mother Tongue"
            options={motherTongueOptions}
          />
        )}
      />

      <Controller
        name="community"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Community" options={communityOptions} />
        )}
      />

      <Controller
        name="disability"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown
            field={field}
            label="Physical Disability"
            options={disabilityOptions}
          />
        )}
      />

      <Controller
        name="state"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="State" options={stateOptions} />
        )}
      />

      <Controller
        name="metroCity"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Metro City" options={metroCitiesOptions} />
        )}
      />

      <Controller
        name="country"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown
            field={field}
            label="Country (Current Residence)"
            options={countryOptions}
          />
        )}
      />

      <Controller
        name="income"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Annual Income" options={incomeOptions} />
        )}
      />

      <Controller
        name="education"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown
            field={field}
            label="Educational Qualifications"
            options={educationOptions}
          />
        )}
      />

      <Controller
        name="occupation"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Dropdown field={field} label="Occupation" options={occupationOptions} />
        )}
      />
    </form>
  );
};

export default SearchFilters;
