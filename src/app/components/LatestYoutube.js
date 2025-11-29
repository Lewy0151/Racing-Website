"use client";

import { useEffect, useState } from "react";

export default function LatestYoutube() {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  const youtubeUrl = "https://www.youtube.com/@BehindTheSaddle25";
  const spotifyUrl = "https://open.spotify.com/show/4wSYuUDXMOMAS7qE4N8iV1";

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/latest-video");
        const data = await res.json();

        if (data?.videoId) {
          setVideoId(data.videoId);
        } else {
          console.warn("No videoId returned:", data);
        }
      } catch (err) {
        console.error("Error fetching video:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-4">

      {/* Header Text */}
      <div className="mb-10 text-3xl heading-font tracking-widest uppercase text-[#fa5555]">
        Latest Podcast Episode
      </div>

      {/* YouTube + Spotify Buttons */}
      <div className="flex flex-row justify-center items-center gap-4 mb-6 w-full">
        {/* YouTube Button */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#fa5555] hover:bg-[#fb9292] 
          transition-all shadow-md text-white px-6 py-3 rounded-full text-lg heading-font 
          tracking-widest uppercase border border-[#fb9292] w-1/2 md:w-auto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.9-.9-1.9-.9-2.4-1C16.7 2.3 12 2.3 12 2.3h-.1s-4.7 0-8.2.4c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S0 8.3 0 10.5v1.9c0 2.2.5 4.3.5 4.3s.2 1.7.9 2.5c.9.9 2.1.9 2.6 1 1.9.2 8 .4 8 .4s4.7 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.8.9-2.5.9-2.5s.5-2.1.5-4.3v-1.9c0-2.2-.5-4.3-.5-4.3zM9.7 14.7V8.8l5.8 3-5.8 2.9z"/>
          </svg>
          YouTube
        </a>

        {/* Spotify Button */}
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#fa5555] hover:bg-[#fb9292] 
          transition-all shadow-md text-white px-6 py-3 rounded-full text-lg heading-font 
          tracking-widest uppercase border border-[#fb9292] w-1/2 md:w-auto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.37 0 .02 5.37.02 12S5.37 24 12 24s11.98-5.37 11.98-12S18.63 0 12 0zm5.52 17.27c-.23.38-.72.5-1.1.27-3.03-1.85-6.84-2.27-11.32-1.25-.43.1-.86-.18-.96-.61-.1-.43.18-.86.61-.96 4.88-1.12 9.12-.65 12.52 1.46.38.23.5.72.25 1.09zm1.52-3.02c-.29.46-.9.6-1.36.31-3.48-2.13-8.77-2.75-12.87-1.51-.52.15-1.08-.14-1.23-.66-.15-.52.14-1.08.66-1.23 4.57-1.33 10.41-.65 14.44 1.82.46.29.6.9.36 1.27zm.14-3.15c-4.02-2.39-10.72-2.61-14.73-1.43-.62.18-1.28-.17-1.46-.79-.18-.62.17-1.28.79-1.46 4.66-1.36 12.06-1.11 16.74 1.68.56.33.74 1.06.41 1.62-.33.56-1.06.74-1.62.38z"/>
          </svg>
          Spotify
        </a>
      </div>

      {/* YouTube Video Embed */}
      {loading && <p>Loading latest video...</p>}
      {!loading && !videoId && <p>No video found.</p>}

      {videoId && (
        <div className="w-full max-w-[800px]">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
