import { useState, useEffect } from "react";

function useSpotifyAuth(clientId, clientSecret) {
  const [token, setToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const getToken = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();

      if (data.error) {
        console.error(data.error);
      } else {
        setToken(data.access_token);
        setExpiresIn(data.expires_in);
      }
    } catch (err) {
      console.error("Failed to fetch token", err);
    }
  };

  useEffect(() => {
    getToken();
  }, [clientId, clientSecret]);

  // This effect manages the token expiration time.
  useEffect(() => {
    // If there's no expiration time, we don't need to do anything.
    if (!expiresIn) return;

    // Set up an interval that will refresh the token a little bit before it expires.
    const interval = setInterval(() => {
      getToken();
    }, (expiresIn - 60) * 1000);

    // Clean up the interval when the component is unmounted or when expiresIn or getToken changes.
    return () => clearInterval(interval);
  }, [expiresIn, getToken]);

  return token;
}

export default useSpotifyAuth;
