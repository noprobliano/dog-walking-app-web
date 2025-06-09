import React, { useState, useEffect } from 'react';

import { useAnalytics } from '../context/AnalyticsContext';
import { useContextProvider } from '../context/ContextProvider';
import './WalkScreen.css';

const WalkScreen = () => {
  const { updateAnalytics } = useAnalytics();
  const { appState } = useContextProvider();
  const [isWalking, setIsWalking] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const startWalk = () => {
    setIsWalking(true);
    setStartTime(Date.now());
    setDistance(0);
    setDuration(0);
  };

  const stopWalk = () => {
    const endTime = Date.now();
    const walkDuration = (endTime - startTime) / 1000;
    updateAnalytics({
      distance: distance,
      duration: walkDuration,
      timestamp: endTime,
    });
    setIsWalking(false);
  };

  useEffect(() => {
    if (isWalking) {
      const interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isWalking]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Walk</h1>
        <button className="stopButton" onClick={stopWalk}>
          <CustomIcon name="stop-circle" size={24} color="white" />
        </button>
      </div>

      <div className="content">
        <div className="statsContainer">
          <div className="statCard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <p className="statLabel">Distance</p>
            <p className="statValue">{distance.toFixed(1)} km</p>
          </div>
          <div className="statCard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="statLabel">Duration</p>
            <p className="statValue">{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</p>
          </div>
        </div>

        <button
          onClick={isWalking ? stopWalk : startWalk}
          className={isWalking ? "stopButton" : "startButton"}
        >
          <CustomIcon name={isWalking ? "stop" : "play"} size={24} color="white" />
          <span className="buttonText">
            {isWalking ? 'Stop Walk' : 'Start Walk'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default WalkScreen;
