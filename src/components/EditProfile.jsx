import { useState, useRef, useEffect } from "react";
import { Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { editProfile } from "../services/api.service";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
} from "../constants/data";
import PersonalInfoForm from "./editProfile/PersonalInfoForm";
import PhotosUploadForm from "./editProfile/PhotosUploadForm";
import CareerEducationForm from "./editProfile/CareerEducationForm";
import AboutMeForm from "./editProfile/AboutMeForm";
import LifestyleForm from "./editProfile/LifestyleForm";
import PartnerPreferencesForm from "./editProfile/PartnerPreferencesForm";
import { fetchUser } from "../Features/Userslice";

export default function EditProfile() {

  const dispatch= useDispatch();
  const user = useSelector((state) => state.user);
  const profileData = user.profileData



  // console.log("profileData",profileData);
  const [formData, setFormData] = useState({});
  const [photos, setPhotos] = useState([])

  const [activeTab, setActiveTab] = useState("personal");
  const fileInputRef = useRef(null);



  useEffect(() => {
    if (profileData) {
      // console.log("🟢 Loaded profileData from store:", profileData);
      setFormData((prev) => ({
        ...prev,
        personalInfo: profileData.personalInfo || {},
        education: profileData.education || {},
        career: profileData.career || {},
        about: profileData.about || {},
        family: profileData.family || {},
        lifeType: profileData.lifeType || {},
        partnerPreferences: profileData.partnerPreferences || {
          ageRange: { min: "", max: "" },
          heightRange: { min: "", max: "" },
          religionCaste: { religion: "", caste: "" },
          location: { country: "", state: "", city: "" },
        },

      }));
      setPhotos(profileData?.profilePic);

    }
  }, [profileData]);
  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handlePhotoUpload = () => {
    console.log('hello')
    const photo = [...fileInputRef.current.files]
    console.log(photo)
    const fileArr = [...photos]
    let flag = false
    fileArr.map((file, i) => {
      if (file == 'null' && !flag) {
        fileArr[i] = photo[0]
        flag = true

      }
      else {
        fileArr[i] == null
      }
    })

    setPhotos(fileArr)


  };


  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos[index] = 'null';
    setPhotos(newPhotos);
  };

  const handlePartnerPreferences = (e, field) => {
    const { name, value } = e.target;
    if (field) {
      setFormData((prev) => ({
        ...prev,
        partnerPreferences: {
          ...prev.partnerPreferences,
          [field]: {
            ...prev.partnerPreferences[field],
            [name]: value,
          },
        },
      }));
    }
    else {
      setFormData((prev) => ({
        ...prev,
        partnerPreferences: {
          ...prev.partnerPreferences,
          [name]: value
        }
      }))
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataFinal = new FormData()
    formDataFinal.append('formData', JSON.stringify(formData))
    photos.forEach((photo) => {
      formDataFinal.append('profilePhotos', photo)
    })
    // formDataFinal.append('profilePhotos',photos)
    for (const [key, value] of formDataFinal.entries()) {
      console.log(key, value)
    }

    const res = await editProfile(formDataFinal);
    toast.success("Profile updated successfully!");
    dispatch(fetchUser());
  };

  return (
    <div className="mx-auto bg-white min-h-screen shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {[
            "personal",
            "photos",
            "career",
            "about",
            "preferences",
            "lifestyle",
          ].map((id) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === id
                  ? "border-b-2 border-rose-500 text-rose-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              {id === "personal"
                ? "Personal Info"
                : id === "photos"
                  ? "Photos"
                  : id === "career"
                    ? "Career & Education"
                    : id === "about"
                      ? "About Me"
                      : id === "preferences"
                        ? "Partner Preferences"
                        : "Lifestyle"}
            </button>
          ))}
        </div>
      </div>

      <form className="p-6" onSubmit={handleSubmit}>
        {activeTab === "personal" && (
          <PersonalInfoForm
            personalInfo={formData.personalInfo}
            handleChange={handleChange}
            maritalStatusOptions={maritalStatusOptions}
            
          />
        )}
        {activeTab === "photos" && (
          <PhotosUploadForm
            photos={photos}
            setPhotos={setPhotos}
            fileInputRef={fileInputRef}
            handlePhotoUpload={handlePhotoUpload}
            handleRemovePhoto={handleRemovePhoto}
          />
        )}
        {activeTab === "career" && (
          <CareerEducationForm
            formData={formData}
            handleChange={handleChange}
            educationOptions={educationOptions}

          />
        )}
        {activeTab === "about" && (
          <AboutMeForm formData={formData} handleChange={handleChange} />
        )}
        {activeTab === "preferences" && (
          <PartnerPreferencesForm
            formData={formData}
            handlePartnerPreferences={handlePartnerPreferences}
            ageOptions={ageOptions}
            maritalStatusOptions={maritalStatusOptions}
            kidsOptions={kidsOptions}
            heightOptions={heightOptions}
            religionOptions={religionOptions}
            motherTongueOptions={motherTongueOptions}
            communityOptions={communityOptions}
            disabilityOptions={disabilityOptions}
            stateOptions={stateOptions}
            metroCitiesOptions={metroCitiesOptions}
            countryOptions={countryOptions}
            incomeOptions={incomeOptions}
            educationOptions={educationOptions}
            occupationOptions={occupationOptions}
          />
        )}
        {activeTab === "lifestyle" && (
          <LifestyleForm formData={formData} handleChange={handleChange} />
        )}

        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
