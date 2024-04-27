import useYouTubeVideos from "../hooks/useYouTubeVideos";
import { Spinner } from "reactstrap"; // import Spinner component

function YouTubePlaylistVideos() {
  // API request to fetch YouTube videos
  const { videos, isLoading } = useYouTubeVideos(
    process.env.REACT_APP_YOUTUBE_PLAYLIST_ID
  ); // get isLoading from useYouTubeVideos

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      {isLoading ? (
        <Spinner color="primary" /> // display Spinner when loading
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default YouTubePlaylistVideos;
