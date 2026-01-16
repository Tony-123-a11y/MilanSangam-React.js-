import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import imageLeft from "../../assets/test4.png";
import LeftImageSection from "../../components/LeftImageSection";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { UserRegisterService } from "../../services/api.service";
import { ChevronDownIcon } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
const [isOpen, setisOpen] = useState(false);
const [current, setcurrent] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData= JSON.parse(localStorage.getItem('firstForm'))
    console.log(userData)
    try {
      setLoading(true);
      const finalData = {
        ...userData,
        ...data,
      };
      console.log(finalData)
      const response = await UserRegisterService(finalData);
      toast.success(response.data.message);
      localStorage.removeItem('firstForm')
      navigate('/login')
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>{
window.addEventListener('click',()=>{
  setisOpen(false)
})
},[])
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="hidden md:block ">
          <LeftImageSection images={[imageLeft, imageLeft, imageLeft]} />
        </div>

        {/* Right Form */}
        <div className="bg-white px-10 py-8 rounded-3xl shadow-2xl w-full">
          <h2 className="text-3xl font-extrabold text-center text-amber-500 mb-6">
            💍 Create Your Matrimony Profile
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" text-gray-800  space-y-2"
          >
            {/* DOB */}
            <div className="">
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                {...register("dob", { required: "DOB is required" })}
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-5 py-2  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
              />
              {errors.dob && (
                <p className="text-xs text-red-500">{errors.dob.message}</p>
              )}
            </div>

            {/* Religion */}
            <div className="">
              <label className="block text-sm font-medium">Religion</label>
               <Controller
            {...register('religion',{required:'This is field is required'})}
             name="religion"
        control={control}
        defaultValue=""
          render={({field})=>{
            return  <div className=" shadow relative rounded-xl  cursor-pointer mt-2">
              <div onClick={(e)=>{
                e.stopPropagation()
                setisOpen(!isOpen)
                setcurrent(3)
              }} className="py-2 px-4 relative">
                  {!field.value ? <span className="text-gray-500">Choose Religion</span> : field.value}
                   <ChevronDownIcon  className="h-5 w-5 text-gray-400 absolute right-3 -translate-y-1/2 top-1/2 pointer-events-none" />
              </div>
             {
              (isOpen && current==3) &&  <ul className="absolute right-0 top-full bg-amber-50 shadow-sm w-1/2 z-20 rounded-xl overflow-hidden">
             {
              ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Parsi', 'Buddhist', 'Jewish', 'Other'].map((option,index)=>{
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
             
              {errors.religion && (
                <p className="text-xs text-red-500">
                  {errors.religion.message}
                </p>
              )}
            </div>

            {/* Mother Tongue */}
            <div className="">
              <label className="block text-sm font-medium ">Mother Tongue</label>
             
               <Controller
            {...register('motherTongue',{required:'This is field is required'})}
             name="motherTongue"
        control={control}
        defaultValue=""
          render={({field})=>{
            return  <div className=" shadow relative rounded-xl  cursor-pointer mt-2">
              <div onClick={(e)=>{
                e.stopPropagation()
                setisOpen(!isOpen)
                setcurrent(0)
              }} className="py-2 px-4  relative">
                  {!field.value ? <span className="text-gray-500">Choose gender</span> : field.value}
                   <ChevronDownIcon  className="h-5 w-5 text-gray-400 absolute right-3 -translate-y-1/2 top-1/2 pointer-events-none" />
              </div>
             {
              (isOpen && current==0) &&  <ul className="absolute right-0 top-full bg-amber-50 shadow-sm w-1/2 z-20 rounded-xl overflow-hidden">
             {
               [
                'Hindi',
                'English',
                'Tamil',
                'Telugu',
                'Kannada',
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
              {errors.motherTongue && (
                <p className="text-xs text-red-500">
                  {errors.motherTongue.message}
                </p>
              )}
            </div>
            <div className="">
              <label className="block text-sm font-medium">Gender</label>
              <Controller
            {...register('gender',{required:'This is field is required'})}
             name="gender"
        control={control}
        defaultValue=""
          render={({field})=>{
            return  <div className=" shadow relative rounded-xl mt-2  cursor-pointer">
              <div onClick={(e)=>{
                e.stopPropagation()
                setisOpen(!isOpen)
                setcurrent(1)
              }} className="py-2 px-4 relative">
                  {!field.value ? <span className="text-gray-500">Choose Gender</span> : field.value}
                   <ChevronDownIcon  className="h-5 w-5 text-gray-400 absolute right-3 -translate-y-1/2 top-1/2 pointer-events-none" />
              </div>
             {
              (isOpen && current==1) &&  <ul className="absolute right-0 top-full bg-amber-50 shadow-sm w-1/2 z-20 rounded-xl overflow-hidden">
             {
               [
                'Male',
                'Female',
                'Other',
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
              {errors.gender && (
                <p className="text-xs text-red-500">{errors.gender.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="">
              <label className="block text-sm font-medium">Email ID</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-5 py-2  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                placeholder="Enter your password"
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-5 py-2  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Caste */}
            <div className="">
              <label className="block text-sm font-medium">Caste</label>
             <Controller
               {...register('caste',{required:'This is field is required'})}
             name="caste"
        control={control}
        defaultValue=""
          render={({field})=>{
            return  <div className=" shadow relative rounded-xl  cursor-pointer">
              <div onClick={(e)=>{
                e.stopPropagation()
                setisOpen(!isOpen)
                setcurrent(2)
              }} className="py-2 px-4 relative mt-2">
                  {!field.value ? <span className="text-gray-500">Choose caste</span> : field.value}
                   <ChevronDownIcon  className="h-5 w-5 text-gray-400 absolute right-3 -translate-y-1/2 top-1/2 pointer-events-none" />
              </div>
             {
              (isOpen && current==2) &&  <ul className="absolute right-0 bottom-full bg-amber-50 shadow-sm w-1/2 z-20 rounded-xl overflow-hidden">
             {
               [
                'General',
'OBC',
'SC',
'ST',
'Others',
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
              {errors.caste && (
                <p className="text-xs text-red-500">{errors.caste.message}</p>
              )}
            </div>

          

            {/* Submit */}
            <div className="col-span-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary cursor-pointer flex items-center justify-center h-11  text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                {loading ? <Loader /> : "Complete Registration 💌"}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
