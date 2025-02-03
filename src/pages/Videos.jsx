import { useEffect, useState } from "react";
import { fetchVideos } from "../services/youtube";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos("игры");
      setVideos(data);
    };
    loadVideos();
  }, []);

  return (
    <div>
      <h1>Видео по играм</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
