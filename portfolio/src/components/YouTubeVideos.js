import React, { useState, useEffect } from "react";

function YouTubePlaylistVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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

  return (
    <div>
      <h1>My YouTube Playlist Videos</h1>
      {videos.map((video) => (
        <div key={video.snippet.resourceId.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default YouTubePlaylistVideos;
