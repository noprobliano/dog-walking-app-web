import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [analyticsData, setAnalyticsData] = useState({
    totalWalks: 0,
    totalDistance: 0,
    totalDuration: 0,
    averageSpeed: 0,
    lastWalk: null,
  });

  useEffect(() => {
    loadAnalyticsData();
  }, []);

  const loadAnalyticsData = async () => {
    try {
      const data = await AsyncStorage.getItem('analytics');
      if (data) {
        setAnalyticsData(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading analytics data:', error);
    }
  };

  const updateAnalytics = async (newData) => {
    try {
      const currentData = analyticsData;
      const updatedData = {
        ...currentData,
        totalWalks: currentData.totalWalks + 1,
        totalDistance: currentData.totalDistance + newData.distance,
        totalDuration: currentData.totalDuration + newData.duration,
        averageSpeed: (currentData.totalDistance + newData.distance) / 
                      ((currentData.totalDuration + newData.duration) / 3600),
        lastWalk: newData.timestamp,
      };
      
      await AsyncStorage.setItem('analytics', JSON.stringify(updatedData));
      setAnalyticsData(updatedData);
    } catch (error) {
      console.error('Error updating analytics:', error);
    }
  };

  const value = {
    analyticsData,
    updateAnalytics,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
