import React from "react";
import { Camera, X } from "lucide-react";

const PhotosUploadForm = ({
  photos,
  fileInputRef,
  setPhotos,
  handlePhotoUpload,
  handleRemovePhoto,
}) => {
  console.log(photos)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Profile Photos</h2>
        <p className="text-sm text-gray-500">Upload up to 6 photos</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        className="hidden"
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
          
              {photo !=='null'  ? (
                <>
                  <img
                    src={
                      typeof photo === "string"
                        ? photo
                        : URL.createObjectURL(photo)
                    }
                    alt={`Profile photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <X size={16} className="text-gray-700" />
                  </button>
                </>
              ) : (
                <label
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
