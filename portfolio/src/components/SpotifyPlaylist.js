// SpotifyPlaylist.js
import React, { useState, useEffect } from "react";
import useSpotifyAuth from "./spotifyAuth";
import "./SpotifyPlaylist.css";
import { Container } from "reactstrap";

export default function SpotifyPlaylist({
  clientId,
  clientSecret,
  playlistId,
}) {
  const [playlist, setPlaylist] = useState(null);
  const token = useSpotifyAuth(clientId, clientSecret);

  useEffect(() => {
    if (!token) return;
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaylist(data))
      .catch((err) => console.error(err));
  }, [token, playlistId]);

  if (!playlist) return null;
  return (
    <div class="container">
      <div className="playlist-container">
        <h2 className="playlist-title">{playlist.name}</h2>
        <ul className="track-list">
          {playlist.tracks.items.map((item) => (
            <li
              className="track-item"
              key={item.track.id}
              onClick={() =>
                window.open(item.track.external_urls.spotify, "_blank")
              }
            >
              <img
                className="album-cover"
                src={item.track.album.images[0].url}
                alt="album cover"
              />
              <div className="track-name">{item.track.name}</div>
              <div className="artist-name">
                {item.track.artists.map((artist) => artist.name).join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
