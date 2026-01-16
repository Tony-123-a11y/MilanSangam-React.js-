import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SearchFilters = () => {
  const { control, handleSubmit } = useForm();
  const [universalOpen, setuniversalOpen] = useState(false);


  const Dropdown = ({ field, label, options,universalOpen,setuniversalOpen }) => {

const isOpen= universalOpen === label
  useEffect(()=>{
    window.addEventListener('click',()=>{
        setuniversalOpen(null)
    },[])
  })
    return (
      <div className="shadow relative rounded-xl bg-gray-50 cursor-pointer font-['poppins']">
        <div
          onClick={(e) => {
            e.stopPropagation();
        setuniversalOpen(label)
          }}
          className="py-3 px-4  relative"
        >
          {!field.value ? (
            <span className="text-gray-700">{label}</span>
          ) : (
            field.value
          )}
          <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-4 pointer-events-none" />
        </div>
        {isOpen && (
          <ul className={twMerge( clsx( 'absolute right-0 top-full max-h-40 custom-scrollbar overflow-y-scroll  bg-amber-50 shadow-sm w-1/2 z-20 rounded-sm ', (label==='Occupation'|| label==='Educational Qualifications') && '-top-[270%]'))}>
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-1 hover:bg-amber-100 cursor-pointer border-gray-200"
                onClick={(e) => {
                  field.onChange(option);
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

  const ageOptions = Array.from({ length: 46 }, (_, i) => (20 + i).toString());
  const maritalStatusOptions = ['Single','Married', 'Unmarried', 'Divorced', 'Awaiting Divorce', 'Nullified marriage', 'Widow'];
  const kidsOptions = ['Yes', 'No', "Doesn't matter"];
  const heightOptions = [
    '4 feet', '4 feet - 1 inch', '4 feet - 2 inch', '4 feet - 3 inch', '4 feet - 4 inch',
    '4 feet - 5 inch', '4 feet - 6 inch', '4 feet - 7 inch', '4 feet - 8 inch', '4 feet - 9 inch',
    '4 feet - 10 inch', '4 feet - 11 inch', '5 feet', '5 feet - 1 inch', '5 feet - 2 inch',
    '5 feet - 3 inch', '5 feet - 4 inch', '5 feet - 5 inch', '5 feet - 6 inch', '5 feet - 7 inch',
    '5 feet - 8 inch', '5 feet - 9 inch', '5 feet - 10 inch', '5 feet - 11 inch', '6 feet',
    '6 feet - 1 inch', '6 feet - 2 inch', '6 feet - 3 inch', '6 feet - 4 inch', '6 feet - 5 inch',
    '6 feet - 6 inch', '6 feet - 7 inch', '6 feet - 8 inch', '6 feet - 9 inch', '6 feet - 10 inch', '6 feet - 11 inch'
  ];
  const religionOptions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Parsi', 'Buddhist', 'Jewish', 'Other'];
  const motherTongueOptions = ['Hindi', 'English', 'Bengali', 'Gujarati', 'Malyalam', 'Kannada', 'Telgu', 'Punjabi', 'Haryanvi', 'Marathi', 'Sindhi', 'Urdu', 'Tamil', 'Bhojpuri', 'Rajasthani', 'Nepali', 'Other'];
  const communityOptions = ['Jat', 'Gurjar', 'Gujjar', 'Baniya', 'Pandit', 'Brahmin', 'Thakur', 'Rajput', 'Yadav', 'Kayastha', 'Chauhan', 'Choudhary', 'Jatav', 'Chhetri', 'Chaurasia', 'Kamboj', 'Kashyap', 'Himachali', 'Garwhali-Kumaon', 'Garwhali', 'Punjabi', 'Ahir', 'Tyagi', 'Chamar', 'Dhobi', 'Khatri', 'Kshatriya', 'Kushwaha', 'Lingayat', 'Kumhar', 'Vaishnav', 'Halwai', 'Varshney', 'Aryasamaj'];
  const disabilityOptions = ['Yes', 'No', "Doesn't Matter", 'Other'];
  const stateOptions = ['Delhi- NCR', 'Haryana', 'Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh', 'Punjab', 'Rajasthan', 'Madhya-Pradesh', 'Odisha', 'Tamil Nadu', 'Karnataka', 'Kerela', 'Andhra-Pradesh', 'Telangana', 'Jammu & Kashmir', 'Maharashtra', 'Lakshadweep', 'Jharkhand', 'Assam', 'Goa', 'Bihar', 'Arunachal Pradesh', 'Gujarat', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'West Bengal'];
  const metroCitiesOptions = ['Noida', 'Gurgaon', 'Ghaiziabad', 'Faridabad', 'Greater Noida', 'Meerut', 'Ahmedabad', 'Hyderabad', 'Jaipur', 'Jodhpur', 'Mumbai', 'Pune', 'Nagpur', 'Aurangabad', 'Nasik', 'Goa', 'Bangalore', 'Chennai', 'Coimbatore', 'Chandigarh', 'Mohali', 'Panchkula', 'Shimla', 'Manali', 'Dehradun', 'Mussorie', 'Kolkata', 'Srinagar', 'Indore', 'Bhopal', 'Lucknow', 'Baroda', 'Vadodra', 'Surat', 'Jamnagar', 'Jammu', 'Udhampur', 'Kota', 'Udaipur', 'Neemrana', 'Bhiwadi', 'Alwar', 'Bikaner', 'Jalandhar', 'Ludhiana', 'Amritsar', 'Mysore', 'Bhuwaneshwar', 'Nainital', 'Hamirpur- HP', 'Mandi-HP', 'Bilaspur- HP', 'Dharamshala-HP', 'Bhuntar-HP', 'Kullu', 'Manali', 'Agra', 'Mathura', 'Aligarh', 'Palwal', 'Ayodhya', 'Bareily', 'Shamli', 'Saharanpur', 'Bijnor', 'Moradabad', 'Rohtak', 'Karnal', 'Hisar', 'Ambala', 'Panipat', 'Sonepat', 'Sirsa'];
  const countryOptions = ['India', 'USA', 'UK', 'Canada', 'Dubai', 'New Zealand', 'Australia', 'Germany', 'France', 'Saudi Arabia', 'Qatar', 'Abu Dhabi', 'Ireland', 'Singapore', 'Mauritius', 'Sri Lanka', 'Bangladesh', 'Bhutan', 'Russia', 'China', 'Denmark', 'Poland', 'Latvia', 'Sweden', 'Italy', 'Spain', 'Norway', 'Belgium', 'Turkey', 'Ukraine', 'South Korea', 'UAE', 'Afghanistan', 'Finland', 'Greece', 'Iceland', 'Hongkong', 'Hungary', 'Iran', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Luxembourg', 'Maldives', 'Malaysia', 'Mexico', 'Monaco', 'Netherland', 'Nigeria', 'Nepal', 'Philippines', 'South Africa', 'Switzerland', 'Thailand', 'Other'];
  const incomeOptions = ['Rs 1 Lacs to Rs 5 Lacs', 'Rs 5 Lacs to Rs 10 Lacs', 'Rs 10 Lacs to Rs 15 Lacs', 'Rs 15 Lacs to Rs 20 Lacs', 'Rs 20 Lacs to Rs 30 Lacs', 'Rs 30 Lacs to Rs 50 Lacs', 'Rs 50 Lacs to Rs 1 Crore', 'Rs 1 Crore to Rs 10 Crore', 'Rs 10 Crore + ( Own Business )'];
  const educationOptions = ['School Passout', 'College Passout', 'Professional Degree', 'Bachelors Degree', 'Masters Degree', 'Certification', 'Diploma', 'PHD'];
  const occupationOptions = ['Private Service', 'Govt Service', 'Public Sector / PSU', 'Military/ Defence', 'Self Employed', 'Own Business', 'Doctor', 'Engineer', 'CA', 'Advocate', 'Consultant', 'Contractor'];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 grid p-1 h-screen hide-scrollbar overflow-y-scroll">
      <Controller name="ageFrom" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Age From"
        options={ageOptions}
         universalOpen={universalOpen} 
         setuniversalOpen={setuniversalOpen}
         />
         )}  />
      <Controller name="ageTo" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Age To"
        options={ageOptions}
         universalOpen={universalOpen}
          setuniversalOpen={setuniversalOpen}
          />
          )}  />
      <Controller name="maritalStatus" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Marriage Status"
        options={maritalStatusOptions}
         universalOpen={universalOpen}
         setuniversalOpen={setuniversalOpen}
         />
         )}  />
      <Controller name="kids" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Kids"
       options={kidsOptions}
        universalOpen={universalOpen}
         setuniversalOpen={setuniversalOpen}
         />
         )}  />
      <Controller name="height" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Height"
       options={heightOptions}
        universalOpen={universalOpen}
         setuniversalOpen={setuniversalOpen}
         />
         )}  />
      <Controller name="religion" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Religion"
       options={religionOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )}  />
      <Controller name="motherTongue" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Mother 
       Tongue" options={motherTongueOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )}  />
      <Controller name="community" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Community"
       options={communityOptions} 
       universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )}  />
      <Controller name="disability" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Physical 
      Disability" options={disabilityOptions}
        universalOpen={universalOpen}
       setuniversalOpen={setuniversalOpen}
       />
      )} />
      <Controller name="state" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="State"
       options={stateOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
        />
       )}  />
      <Controller name="metroCity" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Metro City" options={metroCitiesOptions}
         universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )}  />
      <Controller name="country" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Country (Current Residence)" 
       options={countryOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )} />
      <Controller name="income" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown
      field={field}
       label="Annual Income"
        options={incomeOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )}  />
      <Controller name="education" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Educational Qualifications"
        options={educationOptions}
        universalOpen={universalOpen}
        setuniversalOpen={setuniversalOpen}
       />
       )} />
      <Controller name="occupation" control={control} defaultValue="" render={({ field }) => 
      (<Dropdown 
      field={field}
       label="Occupation"
       options={occupationOptions}
         universalOpen={universalOpen} 
         setuniversalOpen={setuniversalOpen}
         />
         )} />
    </form>
  );
};

export default SearchFilters;
