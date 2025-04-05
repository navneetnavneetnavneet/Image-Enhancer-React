import React from "react";

const ImageUpload = ({ uploadImageHandler }) => {
  const imageHandler = (e) => {
    uploadImageHandler(e.target.files[0]);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto px-6 py-6 bg-white rounded-xl">
      <label
        htmlFor="fileInput"
        className="w-full block text-center cursor-pointer px-4 py-4 rounded-md border-2 border-dashed border-gray-600 hover:border-blue-500"
      >
        <input
          onChange={imageHandler}
          type="file"
          accept="image/*"
          id="fileInput"
          className="hidden"
        />
        <span className="text-sm md:text-base font-medium text-gray-600">
          Click and drag your image to enhance
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
