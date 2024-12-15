import React from "react";

const Controls = ({ isRunning, onToggle, onReset }) => {
  return (
    <div className="flex space-x-4 justify-center">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-md text-white ${isRunning ? 'bg-red-500' : 'bg-green-500'} hover:bg-opacity-80`}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-opacity-80"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
