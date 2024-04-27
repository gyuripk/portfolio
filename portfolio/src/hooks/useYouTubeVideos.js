// useYouTubeVideos.js
import { useState, useEffect } from "react";

function useYouTubeVideos(playlistId) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return videos;
}

export default useYouTubeVideos;
