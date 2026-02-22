import React, { useRef } from "react";
import { Camera, X } from "lucide-react";
import { removePhoto, uploadPhoto } from "../../services/api.service";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../Features/Userslice";
import { toast } from "react-toastify";
const PhotosUploadForm = ({
  photos,
  
  
}) => {
  const dispatch=useDispatch();
  const [index,SetIndex]=React.useState();
  const fileInputRef = useRef(null);
 async function handlePhotoUpload(){
  try {
      const files= fileInputRef.current.files;
      let count=0;
     for (const element of photos) {
       if(!element){
        count++;
       }
     }
     if([...files].length> count){
       return alert(`You can only upload ${count} photos`)
     }
    const formData= new FormData();
    [...files].map((photo)=>{
        formData.append('photos',photo);
    })
   
    formData.append('index',JSON.stringify({index}))
      for (const [key, value] of formData.entries()) {
      console.log(key, value)
    }
    const res = await uploadPhoto(formData);
     dispatch(fetchUser());
     toast.success("Photos uploaded succesfully")
  } catch (error) {
    console.log(error)
  }

 } 

 async function handleRemovePhoto(photoURL,index){
     try {
      console.log(photoURL,index)
       const res =await removePhoto({photoURL,index})
           dispatch(fetchUser());
     toast.success("Photos deleted succesfully")
     } catch (error) {
      console.log(error)
     }
 }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Profile Photos</h2>
        <p className="text-sm text-gray-500">Upload up to 6 photos</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple
        accept="image/*"
        id="photo"
        onChange={() => handlePhotoUpload()}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square border border-gray-200 rounded-lg overflow-hidden relative"
            >
          
              {photo !==null  ? (
                <>
                  <img
                    src={
                      typeof photo === "string"
                        ? photo
                        : URL.createObjectURL(photo)
                    }
                    alt={`Profile photo ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(photo,index)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <X size={16} className="text-gray-700" />
                  </button>
                </>
              ) : (
                <label
                   onClick={()=>SetIndex(index)}
                  htmlFor="photo"
                  className="w-full h-full flex flex-col cursor-pointer items-center justify-center bg-amber-50 hover:bg-gray-100"
                >
                  <Camera size={32} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Add Photo</span>
                </label>
              )}

              {index === 0 && photo && (
                <div className="absolute bottom-0 left-0 right-0 bg-rose-600 text-white text-xs py-1 text-center">
                  Primary Photo
                </div>
              )}
            </div>
          ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-2">
          Photo Guidelines:
        </h3>
        <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
          <li>Photos should clearly show your face</li>
          <li>Avoid group photos for your primary photo</li>
          <li>High-quality, well-lit photos perform better</li>
          <li>Photos should be recent (within the last year)</li>
          <li>Maximum file size: 5MB per photo</li>
        </ul>
      </div>
    </div>
  );
};

export default PhotosUploadForm;
