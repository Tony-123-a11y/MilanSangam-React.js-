import { ArrowLeft, Heart, MessageSquare, PhoneCall, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'

const RejectedProfiles = () => {
    const profiles=[
        {
  "age": 28,
  "caste": "OBC",
  "createdAt": "2025-06-01T10:20:45.000Z",
  "dob": "1997-02-15T00:00:00.000Z",
  "dosh": "",
  "email": "aisha.khan@example.com",
  "fullName": "Aisha Khan",
  "gender": "Female",
  "gothram": "",
  "id": "683aecaa19e5de69f2f3a8d3",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  marriageStatus:'single',
  workingStatus:'Working',
  metro:'Lucknow, Uttar Pradesh',
  educationQualifications:'Graduate',
  "matchScore": 0.85,
  "mobile": "9876543210",
  "motherTongue": "Urdu",
  "otp": "453211",
  "otpExpires": "2025-06-01T10:35:45.000Z",
  "partnerPreferences": {
    "ageFrom": 27,
    "ageTo": 35,
    "marriageStatus": "never married",
    "motherTongue": "Urdu",
    "height": "any",
    "religion": "Muslim",
    "caste": "OBC"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Muslim",
  "role": "user",
  "subcaste": "",
  "updatedAt": "2025-06-01T10:20:45.000Z",
  "verified": true
},
{
  "age": 30,
  "caste": "Brahmin",
  "createdAt": "2025-06-02T09:10:30.000Z",
  "dob": "1995-03-10T00:00:00.000Z",
  "dosh": "Mangal",
  "email": "rohit.verma@example.com",
  "fullName": "Rohit Verma",
  "gender": "Male",
  "gothram": "Vashishtha",
  "id": "683aecaa19e5de69f2f3a8d4",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  "matchScore": 0.92,
  "mobile": "9012345678",
  "motherTongue": "Hindi",
  "otp": "789123",
  "otpExpires": "2025-06-02T09:25:30.000Z",
  "partnerPreferences": {
    "ageFrom": 25,
    "ageTo": 32,
    "marriageStatus": "never married",
    "motherTongue": "Hindi",
    "height": "any",
    "religion": "Hindu",
    "caste": "Brahmin"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Hindu",
  "role": "user",
  "subcaste": "Sanadhya",
  "updatedAt": "2025-06-02T09:10:30.000Z",
  "verified": true
},
{
  "age": 26,
  "caste": "SC",
  "createdAt": "2025-06-03T12:15:00.000Z",
  "dob": "1999-04-25T00:00:00.000Z",
  "dosh": "",
  "email": "meena.joseph@example.com",
  "fullName": "Meena Joseph",
  "gender": "Female",
  "gothram": "",
  "id": "683aecaa19e5de69f2f3a8d5",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": false,
  "matchScore": 0.78,
  "mobile": "8887776665",
  "motherTongue": "Tamil",
  "otp": "234876",
  "otpExpires": "2025-06-03T12:30:00.000Z",
  "partnerPreferences": {
    "ageFrom": 26,
    "ageTo": 34,
    "marriageStatus": "any",
    "motherTongue": "any",
    "height": "any",
    "religion": "Christian",
    "caste": "any"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Christian",
  "role": "user",
  "subcaste": "",
  "updatedAt": "2025-06-03T12:15:00.000Z",
  "verified": true
},
{
  "age": 31,
  "caste": "Jain",
  "createdAt": "2025-06-04T08:00:00.000Z",
  "dob": "1994-01-05T00:00:00.000Z",
  "dosh": "",
  "email": "rajesh.shah@example.com",
  "fullName": "Rajesh Shah",
  "gender": "Male",
  "gothram": "Kashyap",
  "id": "683aecaa19e5de69f2f3a8d6",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  "matchScore": 0.88,
  "mobile": "7654321980",
  "motherTongue": "Gujarati",
  "otp": "123098",
  "otpExpires": "2025-06-04T08:15:00.000Z",
  "partnerPreferences": {
    "ageFrom": 25,
    "ageTo": 30,
    "marriageStatus": "never married",
    "motherTongue": "Gujarati",
    "height": "any",
    "religion": "Jain",
    "caste": "Jain"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Jain",
  "role": "user",
  "subcaste": "Shwetambar",
  "updatedAt": "2025-06-04T08:00:00.000Z",
  "verified": true
}
]
  return (
    <div className='min-h-screen bg-white p-4'>
           <div className="flex items-center gap-2">
          <Link to={'/profile'} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Rejected Profiles</h1>
        </div>
       <div className=" mt-4  grid grid-cols-2 gap-4">
        {
         profiles.map((match,i)=>{
              <ProfileCard match={match} key={match._id} showBtns={false}/>
            return  
         })
       }
       </div>
    </div>
  )
}

export default RejectedProfiles
