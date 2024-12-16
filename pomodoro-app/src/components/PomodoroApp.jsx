import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Controls from "./Controls";

const PomodoroApp = ({ focusDuration = 1500, breakDuration = 300 }) => {
    const [timeLeft, setTimeLeft] = useState(focusDuration); // State for the time left on the timer in seconds
    const [isRunning, setIsRunning] = useState(false); // State for if the timer is running or not
    const [phase, setPhase] = useState("focus"); // State for "focus" or "break" phase
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  
    // Toggle running state of timer
    const toggleTimer = () => setIsRunning(!isRunning);

    // Toggle dark mode
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    
    // Pause timer and reset time left
    const resetTimer = () => {
      setIsRunning(false);
      setTimeLeft(phase === "focus" ? focusDuration : breakDuration);
    };
  
    // Toggle between focus and break phases
    const handlePhaseSwitch = () => {
      const nextPhase = phase === "focus" ? "break" : "focus";
      setPhase(nextPhase);
      setTimeLeft(nextPhase === "focus" ? focusDuration : breakDuration);
      setIsRunning(false);
    };
  
    /* useEffect hook listening for changes in isRunning state.
       When isRunning is true, a timer is set to decrement the remaining time every second until it reaches 0, at which point the phase is switched. */
    useEffect(() => {
      if (isRunning) {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(timer);
              handlePhaseSwitch();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
        return () => clearInterval(timer);
      }
    }, [isRunning]);
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Pomodoro Timer</h1>
        <Timer
          phase={phase}
          timeLeft={timeLeft}
          totalDuration={phase === "focus" ? focusDuration : breakDuration}
        />
        <Controls
          isRunning={isRunning}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md bg-gray-500 text-white mt-4 hover:bg-opacity-80"></button>
      </div>
    );
  };

  export default PomodoroApp; 
  