import React from "react";
import SpotifyPlaylist from "../components/SpotifyPlaylist";

export default function About() {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const playlistId = "1naYaroarJnaG8LsTbRLEa";
  console.log("Client ID:", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  console.log("Base64:", btoa(clientId + ":" + clientSecret));

  return (
    <div>
      <h1>About</h1>
      <SpotifyPlaylist
        clientId={clientId}
        clientSecret={clientSecret}
        playlistId={playlistId}
      />
    </div>
  );
}
