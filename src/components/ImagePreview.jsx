import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div className="relative w-full h-[60vh] shadow-xl bg-white rounded-xl overflow-hidden">
        <h3 className="absolute top-0 left-0 w-full py-2 text-center bg-gray-800 text-white text-xl md:text-2xl font-semibold">
          Original Image
        </h3>
        {props.uploadedImage ? (
          <img
            className="w-full h-full object-cover object-top"
            src={`${props.uploadedImage}`}
            alt=""
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-200">
            <h4 className="text-base md:text-lg font-medium text-gray-600">
              No Image Select
            </h4>
          </div>
        )}
      </div>

      <div className="relative w-full h-[60vh] shadow-xl bg-white rounded-xl overflow-hidden">
        <h3 className="absolute top-0 left-0 w-full py-2 text-center bg-green-800 text-white text-xl md:text-2xl font-semibold">
          Enhanced Image
        </h3>
        {!props.loading && props.enhancedImage && (
          <img
            className="w-full h-full object-cover object-top"
            src={`${props.enhancedImage}`}
            alt=""
          />
        )}

        {!props.loading ? (
          <div className="h-full flex items-center justify-center bg-gray-200">
            <h4 className="text-base md:text-lg font-medium text-gray-600">
              No Image Enhanced
            </h4>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
