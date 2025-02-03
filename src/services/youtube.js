import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = async (query) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`
  );
  return response.data.items;
};
