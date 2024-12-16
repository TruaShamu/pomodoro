import React from "react";

const Timer = ({ phase, timeLeft, totalDuration }) => {
  const progress = (timeLeft / totalDuration) * 100;
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{phase === "focus" ? "Focus Time" : "Break Time"}</h2>
      <h1 class="flex-auto text-lg font-semibold text-slate-900">{formatTime(timeLeft)}</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
