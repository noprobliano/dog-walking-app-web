import React, { useRef, useEffect } from 'react';
import { useAnalytics } from '../context/AnalyticsContext';
import './AnalyticsScreen.css';
import './WalkScreen.css';

const AnalyticsScreen = () => {
  const { analyticsData } = useAnalytics();

  // Generate some sample data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Analytics</h1>
      </div>

      <div className="content">
        <div className="stats-container">
          <div className="stat-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M12 2L10.59 3.41 16.17 9H7v6h9v-6h-5.17l5.59-5.59zM12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <p className="stat-label">Total Walks</p>
            <p className="stat-value">{analyticsData.totalWalks}</p>
          </div>
          <div className="stat-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M12 2L2 7l10 5 10-5-10-5zM12 14L4.41 8.41 5.83 7 12 13.17 18.17 7l1.41 1.41L12 14z" />
            </svg>
            <p className="stat-label">Total Distance</p>
            <p className="stat-value">{analyticsData.totalDistance.toFixed(1)} km</p>
          </div>
          <div className="stat-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <p className="stat-label">Total Time</p>
            <p className="stat-value">{Math.floor(analyticsData.totalDuration / 60)} min</p>
          </div>
          <div className="stat-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M16 18c1.1 0 2-.9 2-2v-8l-6-6v13zm-2-8h2V8l-6-6H8v13h6z" />
            </svg>
            <p className="stat-label">Average Speed</p>
            <p className="stat-value">{analyticsData.averageSpeed.toFixed(1)} km/h</p>
          </div>
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Walk Distance Over Time</h2>
          <div className="chart-container">
            <div className="chart-container">
              <div className="line-chart">
                {chartData.datasets[0].data.map((value, index) => (
                  <div key={index} className="line-point" style={{
                    left: `${(index / (chartData.labels.length - 1)) * 100}%`,
                    top: `${100 - (value / Math.max(...chartData.datasets[0].data) * 100)}%`
                  }}>
                    <div className="line-point-dot" />
                  </div>
                ))}
                {chartData.labels.map((label, index) => (
                  <p key={label} className="chart-label" style={{
                    left: `${(index / (chartData.labels.length - 1)) * 100}%`
                  }}>
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="recent-walks">
          <h2 className="section-title">Recent Walks</h2>
          <div className="walk-list">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="walk-item">
                <div className="walk-info">
                  <p className="walk-date">Walk {index + 1}</p>
                  <p className="walk-details">
                    Distance: {Math.random() * 5 + 2} km
                  </p>
                  <p className="walk-details">
                    Duration: {Math.floor(Math.random() * 30 + 15)} min
                  </p>
                </div>
                <CustomIcon name="chevron-right" size={24} color="#666" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
