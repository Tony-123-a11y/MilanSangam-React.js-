import apiClient from "./interceptor";

// rigister user Api
export const UserRegisterService = (data) => {
  return apiClient.post("/users/register", data);
};
// rigister user Api
export const UserVerifyEmailService = (data) => {
  return apiClient.post("/users/verify-email", data);
};

// export const getMatches = (uid,signal) => {
//   return apiClient.get(`/matchprofile/matchuser/${uid}`,{signal});
// };


export const getContacts=()=>{
  return apiClient.get('/messages/getContacts')
}

export const getProfileDetails=(uid)=>{
  return apiClient.get(`/users/profileDetails/${uid}`)
}

export const sendMessages=(profileId,text)=>{
 return apiClient.post(`/messages/sendmessage/${profileId}`,text)
}
export const getMessages=(profileId)=>{
  return apiClient.get(`/messages/getMessages/${profileId}`)
}
// export const getMatches=()=>{
//   return apiClient.get('/users/getMatchedUsers')
// }
// Login User API
export const UserLoginService = (data) => {
  return apiClient.post("/users/login", data);
};
export const getUser =()=>{
  return apiClient.get('/users/getUser')
}

export const editProfile =(editedData)=>{
  return apiClient.patch('/users/editProfile',editedData)
}
// Forgot Password API
export const ForgotPasswordService = (data) => {
  return apiClient.post("/users/forget-password", data);
};

// Reset Password API
export const ResetPasswordService = (data) => {
  return apiClient.post("/users/reset-password", data);
};




export const getShortListedProfilesService = () => {
  return apiClient.get('/profile/allshortlistedprofiles');
}


// ✅ Withdraw interest
export const withdrawInterestService = (data) => {
  return apiClient.post("/interest/withdraw", data);
};

