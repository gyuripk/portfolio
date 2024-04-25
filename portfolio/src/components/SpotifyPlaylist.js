// SpotifyPlaylist.js
import React, { useState, useEffect } from "react";
import useSpotifyAuth from "./spotifyAuth";
import "./SpotifyPlaylist.css";
import { Container } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SpotifyPlaylist({
  clientId,
  clientSecret,
  playlistId,
}) {
  const [playlist, setPlaylist] = useState(null);
  const token = useSpotifyAuth(clientId, clientSecret);

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (!token) return;
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await response.json();
        setPlaylist(data);
        console.log(data);
        console.log(playlist);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlaylist();
  }, [token, playlistId]);

  if (!playlist) return null;

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="container">
      <div className="playlist-container">
        <div className="playlist-header">
          <div className="playlist-covers">
            {/* 앨범 커버 이미지를 가져와서 렌더링 */}
            <img
              src={playlist.images[0].url}
              style={{ height: "200px", borderRadius: "30px", padding: "20px" }}
            />
          </div>
          <div className="playlist-info">
            <h1 className="playlist-title">{playlist.name}</h1>
            <p className="playlist-details">
              Playlist Owner: {playlist.owner.display_name} •{" "}
              {playlist.tracks.items.length} songs,{" "}
              {formatDuration(
                playlist.tracks.items.reduce(
                  (total, item) => total + item.track.duration_ms,
                  0
                )
              )}
            </p>
            <div className="playlist-actions">
              <button
                className="btn btn-success"
                onClick={() =>
                  window.open(playlist.external_urls.spotify, "_blank")
                }
              >
                <i
                  className="bi bi-play-fill"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </button>
            </div>
          </div>
          <hr></hr>
        </div>
        <table className="track-list">
          <thead style={{ borderBottom: "0.6px solid white" }}>
            <tr>
              <th>#</th>
              <th> </th>
              <th>Title</th>
              <th>Artist</th>
              <th>
                <i className="bi bi-clock"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.items.map((item, index) => (
              <tr
                className="track-item"
                key={item.track.id}
                onClick={() =>
                  window.open(item.track.external_urls.spotify, "_blank")
                }
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    className="album-cover"
                    src={item.track.album.images[0].url}
                    alt="album cover"
                  />
                </td>
                <td className="track-name">{item.track.name}</td>
                <td className="artist-name">
                  {item.track.artists.map((artist) => artist.name).join(", ")}
                </td>
                <td className="track-duration">
                  {formatDuration(item.track.duration_ms)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
