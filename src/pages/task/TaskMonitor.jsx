import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const TaskMonitor = () => {
  const [watched, setWatched] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);
    if (duration && progress.playedSeconds >= duration - 2) {
      setWatched(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">Watch & Earn</h2>

      {/* Video Player */}
      <div className="aspect-video rounded overflow-hidden shadow border border-base-200">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          controls
          onProgress={handleProgress}
          onDuration={setDuration}
        />
      </div>

       {/* Status */}
      <div className="text-center">
        {watched ? (
          <span className="badge badge-success text-lg px-6 py-4 rounded-sm">✅ Task Complete – Reward Unlocked</span>
        ) : (
          <span className="badge badge-warning text-lg px-6 py-4 rounded-sm">⏳ Please watch the full video to earn</span>
        )}
      </div>

      {/* Task Info */}
      <div className="bg-base-100 p-4 rounded shadow border border-base-200 space-y-3">
        <p><strong>Reward:</strong> $0.50</p>
        <p><strong>Description:</strong> Watch the full video to claim your reward.</p>
        <p><strong>Task Type:</strong> Watch Video</p>
        <p><strong>Video Length:</strong> {Math.round(duration)} seconds</p>
      </div>

      {/* Rules */}
      <div className="bg-base-200 p-4 rounded shadow space-y-2">
        <h4 className="text-lg font-semibold">⚠️ Rules to Follow</h4>
        <ul className="list-disc list-inside text-sm">
          <li>Watch the full video without skipping.</li>
          <li>Do not refresh the page during the video.</li>
          <li>Reward will only be granted after 100% watch.</li>
        </ul>
      </div>

     
    </div>
  );
};

export default TaskMonitor;
