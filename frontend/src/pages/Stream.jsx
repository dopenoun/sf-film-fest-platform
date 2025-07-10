
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const { year, filmId } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(`/stream/${year}/${filmId}`);
      const data = await response.json();
      setVideoData(data);
    };
    fetchVideo();
  }, [year, filmId]);

  return (
    <div>
      <h2>Stream</h2>
      {videoData ? (
        <video src={videoData.videoUrl} controls />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default Stream;
