import { useState, useEffect } from "react";

function useYouTubeVideos(playlistId) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // new state for loading status

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // set loading status to true before fetching data
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
      } finally {
        setIsLoading(false); // set loading status to false after fetching data
      }
    };

    fetchData();
  }, []);

  return { videos, isLoading }; // return isLoading
}

export default useYouTubeVideos;
