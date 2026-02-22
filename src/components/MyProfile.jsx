import {
  Edit,
  User,
  HeartHandshake,
  FileText,
  Sparkles,
  Heart,
  Briefcase,
  MapPin,
  Activity,
  Users,
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  Images,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileSkeleton from "./skeletons/ProfileSkeleton";
import { cn } from "../../utils/toggleClass";

export default function MyProfile() {
  const { user, loading, profileData } = useSelector((state) => state.user);

  if (loading || !profileData) {
    return <ProfileSkeleton />;
  }

  const {
    personalInfo = {},
    education = {},
    career = {},
    about = {},
    family = {},
    lifeType = {},
    profilePhotos,
  } = profileData || {};
  const time = new Date(personalInfo?.dob);


  const displayObj = {
    personalInfo: {
      fullName: personalInfo.fullName,
      dob: time.getDay() +'/'+ time.getMonth()+'/'+time.getFullYear(),
      gender: personalInfo.gender,
      marriageStatus: personalInfo.marriageStatus
    },
    professionalInfo: {
      occupation: career.occupation,
      annualIncome: career.annualIncome,
      highestQualifications: education.highestQualification,
      edDetails: education.educationDetails
    },
    religiousInfo: {
      religion: personalInfo.religion,
      caste: personalInfo.caste,
      motherTongue: personalInfo.motherTongue,
    },
    contactInfo: {
      emailId: personalInfo.email,
      mobileNo: personalInfo.mobile
    },
    location: {
      country: "India",
      state: personalInfo.state,
      city: personalInfo.city
    },
    aboutMe: {
      description: about.description,
      interests: about.interests.toString()
    },
    lifeType: {
      ...lifeType
    }
  }


  const categoryArr = [
    {
      icon: <User />,
      categoryName: "personalInfo",
      title: "Personal Information",
      attributes: [
        { key: "fullName", title: "Full Name" },
        { key: "dob", title: "Date of Birth" },
        { key: "gender", title: "Gender" },
        { key: "marriageStatus", title: "Marital Status" }
      ]
    },

    {
      icon: <Briefcase />,
      categoryName: "professionalInfo",
      title: "Professional Information",
      attributes: [
        { key: "occupation", title: "Occupation" },
        { key: "annualIncome", title: "Annual Income" },
        { key: "highestQualifications", title: "Highest Qualification" },
        { key: "edDetails", title: "Education Details" }
      ]
    },

    {
      icon: <HeartHandshake />,
      categoryName: "religiousInfo",
      title: "Religious Information",
      attributes: [
        { key: "religion", title: "Religion" },
        { key: "caste", title: "Caste" },
        { key: "motherTongue", title: "Mother Tongue" }
      ]
    },

    {
      icon: <Phone />,
      categoryName: "contactInfo",
      title: "Contact Information",
      attributes: [
        { key: "emailId", title: "Email ID" },
        { key: "mobileNo", title: "Mobile Number" }
      ]
    },

    {
      icon: <MapPin />,
      categoryName: "location",
      title: "Location Details",
      attributes: [
        { key: "country", title: "Country" },
        { key: "state", title: "State" },
        { key: "city", title: "City" }
      ]
    },

    {
      icon: <FileText />,
      categoryName: "aboutMe",
      title: "About Me",
      attributes: [
        { key: "description", title: "Description" },
        { key: "interests", title: "Interests" }
      ]
    },

    {
      icon: <Sparkles />,
      categoryName: "lifeType",
      title: "Lifestyle",
      attributes: [
        { key: "diet", title: "Diet Preference" },
        { key: "smoking", title: "Smoking Habit" },
        { key: "drinking", title: "Drinking Habit" }
      ]
    }
  ];

  function getValue(category, attr) {
    const categObj = displayObj[category]
    if (!categObj[attr]) {
      return <p className="text-amber-400 font-semibold">---</p>
    }
    return categObj[attr]
  }


 
  const calculateAge = (dob) => {
    if (!dob) return "--";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };
  return (
    <div className="mx-auto bg-white  shadow-sm  p-6">
      {/* Header */}
      <div className=" border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/profile"} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        </div>
        <Link
          to={"/profile/editProfile"}
          className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
        >
          <Edit size={18} />
          Edit Profile
        </Link>
      </div>
 {/* {Images} */}
      <div className="p-6">
        {/* Profile Header Section */}
        <div className="flex flex-col md:flex-row gap-6  p-6 bg-amber-100 rounded-lg">
          <div className="flex-shrink-0 relative">
            <img
              src={profilePhotos?.[0] || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg object-top"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {personalInfo?.fullName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-amber-500" />
                <span>{calculateAge(personalInfo?.dob)} years old</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-amber-500" />
                <span>{personalInfo?.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-500" />
                <span>{personalInfo?.city  || "--"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-amber-500" />
                <span>{career?.occupation ?? "--"}</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-gray-500 text-sm text-end my-8">
          <span className="text-black font-semibold">Member Since:</span>{" "}
          {new Date(user?.createdAt).toLocaleDateString()}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {profilePhotos?.map((photo, index) => (

            (photo != null && <div
              key={index}
              className="aspect-square border border-gray-200 rounded-lg overflow-hidden relative"
            >

              <img
                src={
                  photo
                }
                alt={`Profile photo ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />


            </div>)


          ))}
        </div>
      </div>

      {/* {Detail Tabs} */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {
          categoryArr.map((category) => {
            return (
              <div className="border border-gray-200 bg-amber-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="text-amber-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3 ">
                  {
                    category.attributes.map((attrb) => {
                      return (

                        <div
                          className={cn(
                            "flex justify-between",
                            category.categoryName === "aboutMe" && "block"
                          )}
                        >

                          <div className="text-gray-600">{attrb.title}</div>
                          <div className="font-medium">{getValue(category.categoryName, attrb.key)}</div>
                        </div>


                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

