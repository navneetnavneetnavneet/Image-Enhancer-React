import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="w-full min-h-screen px-5 py-10 bg-zinc-200 flex flex-col items-center justify-center gap-10">
      <div className="text-center flex flex-col gap-3 items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          AI Image Enhancer
        </h1>
        <p className="text-sm md:text-base leading-none font-medium text-gray-600">
          Upload your image to enhaced this image via <br /> AI Image Enhancer.
        </p>
      </div>
      <Home />
      <div className="">
        <p className="text-xs text-gray-500">
          Powered by
          <span className="font-medium">@Sheriyans Coding School</span>
        </p>
      </div>
    </div>
  );
};

export default App;
