import React from "react";

const VideoCard = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={thumbnailUrl} alt={title} />
      </a>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
