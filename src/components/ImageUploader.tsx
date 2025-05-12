import React from "react";

interface ImageUploaderProps {
  photo: string | null;
  setPhoto: (photo: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ photo, setPhoto }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-white mb-2">
        Upload Profile Picture
      </label>

      <div className="flex items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-[#1a0142] border border-purple-600 rounded-md py-2 px-3"
        />

        {photo && (
          <img
            src={photo}
            alt="Preview"
            className="w-[40px] h-[40px] rounded-full object-cover border border-white shadow-sm"
          />
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
