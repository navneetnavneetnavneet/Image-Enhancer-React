import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = (file) => {
    setUploadedImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-full">
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        uploadedImage={uploadedImage}
        enhancedImage={enhancedImage}
        loading={loading}
      />
    </div>
  );
};

export default Home;
