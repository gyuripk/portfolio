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
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <h2>Checkout my works!</h2>
      {videos.map((video) => (
        <div key={video.snippet.resourceId.videoId}>
          <h4>{video.snippet.title}</h4>
          <iframe
            style={{
              width: "700px",
              height: "425px",
              borderRadius: "15px",
              boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.2)",
            }}
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
