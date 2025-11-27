"use client";

import { useEffect, useState } from "react";

export default function LatestYoutube() {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  const channelUrl = "https://www.youtube.com/@BehindTheSaddle25";

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
      
      {/* Rounded Header Box */}
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 bg-[#fa5555] hover:bg-[#fb9292] transition-all shadow-md text-white px-6 py-3 rounded-full text-lg border border-[#fb9292]"
      >
        Latest Podcast Episode
      </a>

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
