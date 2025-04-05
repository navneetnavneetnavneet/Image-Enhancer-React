import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhancedImageAPI";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      
      if (!enhancedURL) {
        setLoading(false);
        return;
      }
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error enhancing image :", error.message);
    }
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
