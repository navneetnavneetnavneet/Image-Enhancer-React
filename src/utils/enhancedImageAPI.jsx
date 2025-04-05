import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
const BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual base URL

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImageHanlder(file);
    // console.log("Image uploaded successfully, Task Id :", taskId);

    const enhacedImageData = await pullForEnhacedImage(taskId);
    // console.log("Enhaced Image Data :", enhacedImageData);

    return enhacedImageData?.image;
  } catch (error) {
    console.log("Enhancing Image Error", error);
  }
};

const uploadImageHanlder = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
      `${BASE_URL}/api/tasks/visual/scale`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": API_KEY,
        },
      }
    );

    return data?.data?.task_id;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image!");
  }
};

const fetchEnhancedImage = async (taskId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": API_KEY,
        },
      }
    );

    return data?.data;
  } catch (error) {
    console.error("Error fetching enhanced image:", error);
    throw new Error("Error fetching enhanced image!");
  }
};

const pullForEnhacedImage = async (taskId, retries = 0, dealy = 2000) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    // console.log("Processing  . . .", result?.state_detail);

    if (retries >= 10) {
      throw new Error("Max retries reached, please try again later !");
    }

    await new Promise((resolve) => setTimeout(resolve, dealy));
    return pullForEnhacedImage(taskId, retries + 1, dealy);
  }

  return result;
};
