import { useState, useEffect } from "react";

export default function useSpotifyAuth(clientId, clientSecret) {
  const [token, setToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const getToken = () => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          setToken(data.access_token);
          setExpiresIn(data.expires_in);
        }
      })
      .catch((err) => console.error("Failed to fetch token", err));
  };

  useEffect(() => {
    getToken();
  }, [clientId, clientSecret]);

  useEffect(() => {
    if (!expiresIn) return;
    const interval = setInterval(() => {
      getToken();
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [expiresIn, getToken]);

  return token;
}
