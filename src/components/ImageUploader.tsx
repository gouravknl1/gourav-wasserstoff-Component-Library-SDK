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
    <div className="mb-4">
      <label className="mb-2 block text-white">Upload Profile Picture</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 text-white"
      />

      {photo && (
        <img
          src={photo}
          alt="Preview"
          className="w-[100px] h-[100px] object-cover mb-4 rounded-full"
        />
      )}
    </div>
  );
};

export default ImageUploader;
