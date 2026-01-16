import React, { useState } from "react";
import {
  UserIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

   
  const onFormSubmit = (data) => {
    localStorage.setItem('firstForm',JSON.stringify(data))
    navigate("/register");
  };

useEffect(()=>{
window.addEventListener('click',()=>{
  setisOpen(false)
})
},[])


  const [isOpen, setisOpen] = useState(false);


  return (
    <div className=" max-w-md mx-auto p-1 rounded-4xl overflow-hidden  bg-white pb-8  shadow-sm ">
      <div className="bg-gradient-to-b bg-primary  font-['inter'] text-white text-center py-5 rounded-t-4xl shadow-md  relative overflow-hidden">
        <h2 className="text-2xl font-bold text-white max-sm:text-xl">
          Create Your Matrimony Profile
        </h2>
        <p className="text-sm max-sm:text-xs mt-1 text-white drop-shadow-md font-['montserrat']">
          Find your perfect match today
        </p>
      </div>
      {/* main form */}
      <div className="rounded-b-3xl px-6  animate-fade-in mt-8 font-['poppins']">
        <form onSubmit={handleSubmit(onFormSubmit)} className="">
          {/* Profile For */}
          <div>
            <Controller
            {...register('profileFor',{required:'This is field is required'})}
             name="profileFor"
        control={control}
        defaultValue=""
          render={({field})=>{
            return  <div className=" shadow relative rounded-xl  cursor-pointer">
              <div onClick={(e)=>{
                e.stopPropagation()
                setisOpen(!isOpen)
              }} className="py-3 px-4 relative">
                  {!field.value ? <span className="text-gray-500">Create profile for</span> : field.value}
                   <ChevronDownIcon  className="h-5 w-5 text-gray-400 absolute right-3 top-4 pointer-events-none" />
              </div>
             {
              isOpen &&  <ul className="absolute right-0 top-full bg-amber-50 shadow-sm w-1/2 z-20 rounded-xl overflow-hidden">
             {
               [
                'Self',
                'Brother',
                'Sister',
                'Friend',
                'Son',
                'Daughter',
              ].map((option,index)=>{
                  return <li className="px-4 py-1 hover:bg-amber-100 cursor-pointer  border-gray-200" key={index} onClick={()=>{
                    setisOpen(false)
                 field.onChange(option)
                 }}>
                    {option}
                  </li>
              })
             }
             </ul>
             }
            </div>
          }}
            />
            {errors.profileFor && (
              <p className="text-xs text-red-300">
                {errors.profileFor.message}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div className="mt-4">
            <label
              htmlFor="fullName"
              className="block text-sm font ml-1 font-medium text-gray-500"
            >
              Full Name:
            </label>
            <div className="relative">
              <input
                {...register("fullName", { required: "Name is required" })}
                placeholder="e.g. User Name"
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                id="fullName"
              />
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-6 " />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-300">{errors.fullName.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="mt-4">
            <label
              htmlFor="mobile"
              className="block text-sm font ml-1 font-medium text-gray-500"
            >
              Mobile Number:
            </label>
            <div className="flex gap-2 items-center  mt-2">
              <select
                className="w-24 shadow-sm  shadow-gray-300 rounded-xl text-gray-500 px-2 py-3  focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                id="mobile"
              >
                <option>+91</option>
              </select>
              <div className="relative w-full">
                <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid mobile number",
                    },
                  })}
                  type="number"
                  placeholder="10-digit number"
                  className="w-full appearance-none shadow-sm  shadow-gray-300 max-sm:text-sm rounded-xl pl-10 pr-3 py-3 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60"
                />
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              </div>
              {errors.mobile && (
                <p className="text-xs text-red-300">{errors.mobile.message}</p>
              )}
            </div>
          </div>
         
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-b group flex items-center justify-center gap-2 bg-primary cursor-pointer  mt-4 text-white font-bold py-2.5 rounded-xl w-full text-lg  transition-all duration-300 shadow-md hover:shadow-md hover:shadow-red-200 max-sm:text-base"
          >
            <span>REGISTER FREE </span>
            <span className="group-hover:translate-x-1/2 transition text-2xl max-sm:text-xl">
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
